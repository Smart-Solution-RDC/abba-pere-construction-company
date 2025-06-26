

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
        id: true,
        statut: true,
        panier: {
            select: {
                produit: {
                    select: {
                        detailsPanier: {
                            designation: true
                        }
                    }
                }
            }
        }
    }

    
    const data = await Pagination(request, 'commande', condition, selection, null);
    
    return new Response(JSON.stringify(data));
}

