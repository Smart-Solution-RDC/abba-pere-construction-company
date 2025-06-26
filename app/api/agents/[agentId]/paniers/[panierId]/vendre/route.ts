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

    const detailsPanier = await prisma.detailPanier.createManyAndReturn({
        data: form.details
    });

    if (!detailsPanier) return new Response(JSON.stringify({error: "Les details du Panier ne sont pas valide."}), { status: 201 });
    
    try {
        let ProduitsDisponible = await GetProduit(detailsPanier);
        let devisesProduit = [];
        for (let i = 0; i < detailsPanier.length; i++) {
            const Detail = detailsPanier[i];
            if (Detail.qtte > ProduitsDisponible[i].qtteDisponible) return new Response(`Produit ${ProduitsDisponible[i].designation} N'est Pas Disponible en Stock`, { status: 404 });
            devisesProduit.push({
                id: ProduitsDisponible[i].id,
                deviseId: ProduitsDisponible[i].deviseId,
                tauxDEchange: ProduitsDisponible[i].devise.tauxDEchange
            });
        }

        // let nouveauClient: any | null = null;
        // if (form.typeAcheteur === 'NOUVEAU') {
        //     try {
        //         nouveauClient = await prisma.client.create({
        //             data: {
        //                 nom: form.client.nom,
        //                 nom_complet: form.client.nom,
        //                 email: form.client.email
        //             }
        //         });

        //         if (nouveauClient) {
        //             await prisma.contact.create({
        //                 data: {
        //                     tel: form.client.tel,
        //                     clientId: nouveauClient.id
        //                 }
        //             });

        //             await prisma.adresse.create({
        //                 data: {
        //                     adresse: form.client.adresse,
        //                     clientId: nouveauClient.id
        //                 }
        //             });
        //         }
                
        //     } catch (error) {
        //         return new Response("Formulaire Client Invalide", { status : 404 });
        //     }
        // }

        const vente = await Vente(agent, panier.id, form.client);
        const paiementData = {
            panierId: panier.id,
            deviseProduit: devisesProduit,
            deviseId: form.deviseId,
            modePaiementId: form.modePaiementId
        };

        // const paiement = await Paiement(detailsPanier, paiementData, null, vente?.id, null);
        // const destockage = await VariationStockage (detailsPanier, null, true, null);
        // const caisseData = {
        //     deviseId: form.deviseId,
        //     modePaiementId: form.modePaiementId,
        //     montant: paiement
        // }

        // const encaissement = await VariationCaisse(caisseData, null, true, null);

        const resetPanier = await prisma.panier.update({
            where: {id: panier.id},
            data: { statut: 'VALIDE' }
        }); 
        
        return new Response(JSON.stringify(vente), { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status : 201 });        
    }    
} 

 