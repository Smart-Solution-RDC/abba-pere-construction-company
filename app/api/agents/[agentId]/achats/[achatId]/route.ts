import { prisma } from "@/lib/prisma";
import { AchatRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: AchatRouteParams) {
    const { agentId, achatId } = await params;

    const agent = await prisma.agent.findUnique({
        where: { id: parseInt(agentId) }
    });

    if (!agent) return new Response(JSON.stringify({error: "Agent Not Found!"}), { status: 404 });

    const achat = await prisma.achat.findUnique({
        where: { id: parseInt(achatId) },
        select: {
            id: true,
            statut: true,
            createdAt: true,
            updatedAt: true,
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            produit: { select: { designation: true } },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotalHT: true,
                            devise: {
                                select: {
                                    symbole: true
                                }
                            },
                            fournisseur: {
                                select: {
                                    nom: true,
                                    typeProduit: true
                                }
                            }
                        }
                    }
                }
            },
            agent: {
                select: { nom_complet: true }
            },
            paiements: {
                select: {
                    montant: true,
                    modePaiement: {
                        select: {
                            type: true
                        }
                    },
                    devise: {
                        select: {
                            symbole: true
                        }
                    }
                }
            },
        }
    });

    if (!achat) return new Response(JSON.stringify({error: "Achat Not Found!"}), { status: 404 });

    // Convert date fields to { jour, mois, annee, heure } format for the response
    function formatDate(date: Date | string) {
        const d = date instanceof Date ? date : new Date(date);
        return {
            jour: d.getDate(),
            mois: d.getMonth() + 1,
            annee: d.getFullYear(),
            heure: d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        };
    }

    const achatResponse = achat
        ? {
            ...achat,
            createdAt: `${formatDate(achat.createdAt).jour}/${formatDate(achat.createdAt).mois}/${formatDate(achat.createdAt).annee} à ${formatDate(achat.createdAt).heure}`,
            updatedAt: `${formatDate(achat.createdAt).jour}/${formatDate(achat.createdAt).mois}/${formatDate(achat.createdAt).annee} à ${formatDate(achat.createdAt).heure}`,
        }
        : null;

    return new Response(JSON.stringify(achatResponse), { status: 201 });
}

