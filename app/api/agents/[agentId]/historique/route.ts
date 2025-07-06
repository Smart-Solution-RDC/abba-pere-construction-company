

import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";
import { checkTable } from "@/prisma/utils";

export async function GET(req: Request, { params }: AgentRouteParams) {
    const { agentId } = await params; 

    const agent = await checkTable('agent', agentId);
    if (!agent) return new Response(JSON.stringify({error: "User Nt Found!"}), { status: 201 });

    try {
        const datasRaw = await prisma.paiement.findMany({
            where: {
                OR: [
                    { venteId: { not: null }},
                    { achatId: { not: null }},
                    { commandeId: { not: null }}
                ]
            },
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
                },
                achat: {
                    select: {
                        id: true,
                        statut: true,
                        updatedAt: true
                    }
                },
                vente: {
                    select: {
                        id: true,
                        statut: true,
                        updatedAt: true
                    }
                },
                commande: {
                    select: {
                        id: true,
                        statut: true
                    }
                }
            }
        });

        // Format the date for achat.updatedAt
        const datas = datasRaw.map(item => ({
            ...item,
            achat: item.achat
                ? {
                    ...item.achat,
                    updatedAt: item.achat.updatedAt
                        ? new Date(item.achat.updatedAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        })
                        : null
                }
                : null,
            vente: item.vente
                ? {
                    ...item.vente,
                    updatedAt: item.vente.updatedAt
                        ? new Date(item.vente.updatedAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        })
                        : null
                }
                : null
        }));
        return new Response(JSON.stringify(datas));
    } catch (error) {
        return new Response(JSON.stringify({error: "Erreur de Récuperation des Données."}), { status: 201 });        
    }

}



