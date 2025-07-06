import { prisma } from "@/lib/prisma";
import { VenteRouteParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: VenteRouteParams ) {
    const { venteId } = await params;

    const vente = await prisma.vente.findUnique({
        where: { id: parseInt(venteId) },
        select: {
            id: true,
            statut: true,
            dateLivraison: true,
            adresseLivraison: true,
            notes: true,
            createdAt: true,
            updatedAt: true,
            enregistrerPar: true,
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            produit: {
                                select: {
                                    designation: true
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotalHT: true,
                            devise: {
                                select: {
                                    symbole: true
                                }
                            }
                        }
                    }
                }
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
            }
        }
    });

    if (!vente) return new Response(JSON.stringify({error: "Achat Not Found"}), { status: 201 });

    const venteFormat = {
        ...vente,
        createdAt: new Date(vente.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }) + ' à ' + new Date(vente.updatedAt).getHours()+':'+new Date(vente.updatedAt).getMinutes(),
        updatedAt: new Date(vente.updatedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }) + ' à ' + new Date(vente.updatedAt).getHours()+':'+new Date(vente.updatedAt).getMinutes(),
    }

    return new Response(JSON.stringify(venteFormat), { status: 201 });
}

