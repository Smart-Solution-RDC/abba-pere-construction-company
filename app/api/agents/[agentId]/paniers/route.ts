import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest, { params }: PanierRouteParams) {
    const { agentId } = await params;

    // verify panier with statut* attr
    const panier = await prisma.panier.findFirst({
        where: { agentId: parseInt(agentId), statut: 'EN_COURS' },
        select: { id: true }
    });

    if (panier) {
        const detailsPanier = await prisma.detailPanier.findMany({
            where: { panierId: panier.id, panier: { statut: 'EN_COURS' }},
            select: {
                id: true,
                produitId: true,
                produit: {
                    select: {
                        designation: true
                    }
                },
                qtte: true,
                prixUnitaire: true,
                prixTotalHT: true,
                prixTotalTTC: true,
                deviseId: true,
                modePaiementId: true,
                devise: {
                    select: {
                        id: true,
                        code: true
                    }
                }
            }
        });

        return new Response(JSON.stringify({detailsPanier, panierId: panier.id}), { status: 201 });
    } 

    if (!panier) {
        const createPanier = await prisma.panier.create({
            data: { agentId: parseInt(agentId) }
        });

        return new Response(JSON.stringify({panierId: createPanier.id}), { status: 201 });
    }    
}




