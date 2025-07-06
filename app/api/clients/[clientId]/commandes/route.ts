
import { prisma } from "@/lib/prisma";
import { Pagination, UpdateCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";

interface RouteParams {
    params: {
        clientId: string,
        commandeId: string
    }
}

export async function GET(request: NextRequest, { params }: RouteParams ) {

    const { clientId } = await params;

    // const client = await prisma.client.findUnique({
    //     where: { id: parseInt(clientId) }
    // });
    // if (!client) return new Response(JSON.stringify({error: "Client Not Found"}), { status: 404 });

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('id');
    if (search !== null) {
        parseInt(search);
    }

    // const condition = search ? {
    //     OR: [{ id: search ? { contains: search, mode: 'insensitive' } : undefined }] 
    // } : {};

    const cond = {
        clientId: parseInt(clientId)
        // commandeId: commande.id
    }

    const selection = {
            id: true,
            statut: true,
            estReserve: true,
            dateLivraison: true,
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            prixTotalHT: true
                        },
                        _sum: {
                            prixTotalHT: true
                        }
                    }
                }
            }
            
    }

   
    const commandes = await prisma.commande.findMany({
        where: { clientId: parseInt(clientId) },
        select: {
            id: true,
            statut: true,
            estReserve: true,
            dateLivraison: true,
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            prixTotalHT: true,
                            devise: {
                                select: {
                                    symbole: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    let rawDatas = [];
    let total = 0;
    let symbole: string | undefined = '';
    
    for (let i=0; i<commandes.length; i++) {
        const commande = commandes[i];
        rawDatas.push({
            id: commande.id,
            statut: commande.statut,
            estReserve: commande.estReserve,
            dateLivraison: commande.dateLivraison,
            prix: {}
        });
        for (let j = 0; j < commande.panier.detailPaniers.length; j++) {
            const detail = commande.panier.detailPaniers[j];
            total += detail.prixTotalHT;
            symbole = detail.devise?.symbole
        }
        rawDatas[i].prix = {
            prixTotal: total,
            symbole: symbole
        }
        
    }
        
    
    // const data = await Pagination(request, 'commande', cond, selection, null);
    
    return new Response(JSON.stringify(rawDatas), { status: 201 });
}
