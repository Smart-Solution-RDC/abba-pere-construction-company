import { Achat } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { VariationStockage, Paiement, VariationCaisse, VerifierSoldeDiponible, GetMontantPanier, GetProduit, UpdateDetailPanier, checkTable } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest, { params }: PanierRouteParams) {
    const { agentId, panierId } = await params;
    const form = await request.json();
    
    const panier = await checkTable('panier', panierId);    
    const agent = await checkTable('agent', agentId);
    if(!panier || !agentId) return new Response(JSON.stringify({error: "Error! Informations no définies"}), { status: 404 });
    
    try {        
        // Somme Disponible (Les messages d'erreur)
        const verification = await VerifierSoldeDiponible(form.paiement);
        if (!verification?.soldeActuel) return new Response (JSON.stringify({error: `Solde en ${verification?.nomCaisse}, ${verification?.type} est insuffisant`}));

        // Enregistrement des details du panier...
        await prisma.detailPanier.createMany({ data: form.detailsPanier });

        // Valider l'achat
        const achat = await prisma.achat.create({
            data: { panierId: parseInt(panierId), agentId: parseInt(agentId) }
        });

        await VariationStockage (null, form.detailsPanier, true, null, null);
        // const action = { type: 'ACHAT', id: achat.id};
        await Paiement (form.paiement, achat.id, null, null);
        await VariationCaisse(form.paiement, 'DECREMENT');
        await prisma.panier.update({ where: {id: parseInt(panierId)}, data: { statut: 'VALIDE' } }); 

        return new Response(JSON.stringify({
            message: "Approvisionnement enregistré !",
            data: achat?.id
        }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });;
    }
} 





