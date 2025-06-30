import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { checkTable, GetDetailPanier, GetProduit, Paiement, VariationCaisse, VariationStockage, Vente } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest, { params }: PanierRouteParams) {
    const { panierId, agentId } = await params;
    const form = await request.json();

    const panier = await checkTable('panier', panierId);    
    const agent = await checkTable('agent', agentId);
    if(!panier || !agentId) return new Response(JSON.stringify({error: "Error! Informations no définies"}), { status: 404 });
    
    for (let i = 0; i < form.details.length; i++) {
        let detail = form.details[i];
        detail.prixTotalTTC = detail.prixTotalHT * 0.16;
    }

    try {
        let ProduitsDisponible = await GetProduit(form.details);
        for (let i = 0; i < form.details.length; i++) {
            const Detail = form.details[i];
            if (Detail.qtte > ProduitsDisponible[i].qtteDisponible) {
                return new Response(JSON.stringify({error: `Produit ${ProduitsDisponible[i].designation} N'est Pas Disponible en Stock`}), { status: 201 });
            }
        }

        await prisma.detailPanier.createMany({
            data: form.details
        });
        const vente = await Vente(agent, panier.id, form.client);
        await Paiement(form.paiement, null, vente.id, null);
        await VariationStockage (ProduitsDisponible, form.details, null, true, null);
        await VariationCaisse(form.paiement, 'INCREMENT');

        // Reset Panier
        await prisma.panier.update({ where: {id: panier.id}, data: { statut: 'VALIDE' } }); 
        
        return new Response(JSON.stringify({ 
            message: "Vente enregistré !",
            data: vente?.id
        }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status : 201 });        
    }    
} 

 