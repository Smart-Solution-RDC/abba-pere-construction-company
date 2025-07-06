

import { prisma } from "@/lib/prisma";
import { Pagination, UpdateCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";

interface RouteParams {
    params: {
        clientId: string
    }
}

export async function GET(request: NextRequest, { params }: RouteParams ) {
    const searchParams = request.nextUrl.searchParams;
    const idCommande = searchParams.get('id');

    const { clientId } = await params;

    const condition = {
        clientId: parseInt(clientId)
    }

    const selection = {
        
        // panier: {
        //     select: {
        //         produit: {
        //             select: {
        //                 detailsPanier: {
        //                     designation: true
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    const datas = await prisma.vente.findMany({
        where: { clientId: parseInt(clientId) },
        select: {
            id: true,
            statut: true,
            updatedAt: true,
            paiements: {
                select: {
                    montant: true,
                    devise: {
                        select: {
                            symbole: true
                        }
                    },
                    modePaiement: {
                        select: {
                            type: true
                        }
                    }
                }
            }
        }
    });


    const datasRaw = datas.map(item => ({
        ...item,
        ...item.updatedAt,
                updatedAt: item.updatedAt
                    ? new Date(item.updatedAt).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })
                    : null
        }));

    return new Response(JSON.stringify(datasRaw));
}

