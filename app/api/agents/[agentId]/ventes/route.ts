import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const condition = {
        statut: 'CONFIRME'
    }

    const selection = {
        id: true,
        // statut: true,
        nom: true,
        // tel: true,
        client: {
            select: {
                nom_complet: true,
            },
        },
        agent: {
            select: {
                nom_complet: true,
            },
        },
        fournisseur: {
            select: {
                nom: true,
            },
        },
        paiements: {
            select: {
                montant: true,
                devise: {
                    select: {
                        code: true
                    }
                },
                modePaiement: {
                    select: {
                        type: true
                    }
                }
            }
        },
        createdAt: true
    }
    
    const data = await Pagination(request, 'vente', condition, selection, null);

    return new Response(JSON.stringify(data), { status: 201 });
}


 