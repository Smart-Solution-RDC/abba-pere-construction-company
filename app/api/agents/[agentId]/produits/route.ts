import { prisma } from "@/lib/prisma";
import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const produits = await prisma.produit.findMany({
        where: {},
        select: {
            id: true,
            designation: true,
            prixUnitaire: true,
            teneur: {
                select: {
                    valeur: true
                }
            },
            typeProduit: true,
            // qtteDisponible: true,
            deviseId: true,
            devise: {
                select: {
                    id: true,
                    code: true,
                    tauxDEchange: true
                }
            }
        }
    });

    return new Response(JSON.stringify(produits), { status: 201 });
}


 