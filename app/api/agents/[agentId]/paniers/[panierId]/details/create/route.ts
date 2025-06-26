import { DetailPanier } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { DetailPanierForm } from "@/prisma/defs-front";
import { DefaultModePaiement, GetModePaiement, PrixUnitaireSystem } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest, { params }: PanierRouteParams) {
    const { panierId } = await params;
    const data = await request.json();

    const panier = await prisma.panier.findUnique({
        where: {id: parseInt(panierId)}
    });
    
    if(!panier) return new Response(JSON.stringify({error: "Panier Not Found"}), { status: 404 });

    // verify...
    // const produits = await prisma.produit.findMany({
    //     where: {id: { in: data.map(item => item.produitId)}},
    //     select: {id: true, deviseId: true, devise: {
    //         select: {
    //             id: true,
    //             tauxDEchange: true
    //         }
    //     }}
    // });
    
    for (let i = 0; i < data.length; i++) {
        let detail = data[i];

    // //     if (field.produitId == produits[i].id) {
    // //         field.prixUnitaire = (await PrixUnitaireSystem(field.produitId, field.prixUnitaire)) ?? 0;
    // //         field.modePaiementId = (await DefaultModePaiement(field.modePaiementId)) ?? 0;
            
    // //         if (!field.deviseId) {
    // //             field.deviseId = produits[i].devise.id;
    // //         }

    // //         if (field.deviseId == produits[i].devise.id) {
    // //             field.prixTotalHT = field.prixUnitaire * field.qtte;
    // //         } 
            
    // //         if (field.deviseId !== produits[i].devise.id) {
    // //             field.prixUnitaire = field.prixUnitaire * produits[i].devise.tauxDEchange;
    // //             field.prixTotalHT = (field.prixUnitaire * field.qtte);
    // //         } 
    // //     }
    // //     field.panierId = parseInt(panierId);
        detail.prixTotalTTC = detail.prixTotalHT * 0.16;
    }

    try {
        await prisma.detailPanier.createMany({
            data: data
        });

        const resetPanier = await prisma.panier.update({
            where: {id: panier.id},
            data: { statut: 'VALIDE' }
        });

        // "Detail Panier Added!"
        return new Response(JSON.stringify(data), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({data, error: "Invalid Form"}), { status: 201 });
    }
}





 