import { Achat } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { CreateMouvementCaisse, VariationStockage, GetDetailPanier, Paiement, UpdateCaisse, updateCaisseMouvement, VariationCaisse, VerifierSoldeDiponible, GetMontantPanier, GetProduit, UpdateDetailPanier } from "@/prisma/utils";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest, { params }: PanierRouteParams) {
    const { agentId, panierId } = await params;
    const form = await request.json();
    
    const agent = await prisma.agent.findUnique({
        where: { id: parseInt(agentId) }
    });

    if (!agent) return new Response("Agent not found", { status: 404 });

    const panier = await prisma.panier.findUnique({
        where: { id: parseInt(panierId) }
    });

    if (!panier) return new Response("Panier not found", { status: 404 });

    try {

        const detailsPanier = await GetDetailPanier(parseInt(panierId));
        let ProduitsDisponible = await GetProduit(detailsPanier);
        
        // Recuperer le montant, faire la conversion si possible
        let devisesProduit = [];
        for (let i = 0; i < detailsPanier.length; i++) {
            devisesProduit.push({
                deviseId: ProduitsDisponible[i].deviseId,
                tauxDEchange: ProduitsDisponible[i].devise.tauxDEchange
            });
        }

        const data = {
            panierId: parseInt(panierId),
            deviseProduit: devisesProduit,
            deviseId: form.deviseId,
            modePaiementId: form.modePaiementId
        };

        const montant = await GetMontantPanier(detailsPanier, data);

        // Verifier si la somme est disponible (Les messages d'erreur)
        const verification = await VerifierSoldeDiponible(form.modePaiementId, form.deviseId, montant);

        if (verification?.modePaiement == false) return new Response (`Mode de Paiement non disponible en ${verification.nomCaisse}`)
        if (verification?.soldeActuel == false) return new Response (`Solde en ${verification.nomCaisse}, ${verification.type} est insuffisant`)

        // Valider l'achat
        const achat = await prisma.achat.create({
            data: {
                fournisseurId: form.fournisseurId,
                panierId: parseInt(panierId),
                agentId: parseInt(agentId)
            }
        });

        // // faire le destockage
        const stockage = await VariationStockage (detailsPanier, true, null, null);
        const paiementData = {
            panierId: parseInt(panierId),
            deviseProduit: null,
            deviseId: form.deviseId,
            modePaiementId: form.modePaiementId
        };

        // // valider le paiement
        const paiement = await Paiement (detailsPanier, paiementData, achat.id, null, null);
        const decaissementData = {
            achatId: achat.id,
            modePaiementId: form.modePaiementId,
            montant: paiement
        };

        const decaissement = await VariationCaisse(decaissementData, true, null, null);
        
        // Mettre le datail du panier à jour
        // const updateDetail = await ResetDetailPanier ();
        // Desactiver le panier

        return new Response(JSON.stringify(verification), { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 400 });
    }
} 





