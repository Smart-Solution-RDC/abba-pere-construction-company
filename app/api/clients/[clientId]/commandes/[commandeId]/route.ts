import { prisma } from "@/lib/prisma";
import { CommandeParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: CommandeParams ) {
    const { commandeId } = await params;

    const commande = await prisma.commande.findUnique({
        where: { id: parseInt(commandeId) },
        select: {
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            produit: {
                                select: {
                                    designation: true
                                }
                            },
                            devise: {
                                select: {
                                    symbole: true
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotalHT: true
                        }
                    }
                }
            },
            createdAt: true,
            updatedAt: true,
            statut: true,
            dateLivraison: true,
            adresseLivraison: true,
            notes: true,
            client: {
                select: {
                    nom_complet: true
                }
            },
            acheteurTiers: {
                select: {
                    nom: true,
                    postnom: true,
                    tel: true
                }
            }
        }
    });

    if (!commande) return new Response(JSON.stringify({error: "Commande Not Found"}), { status: 201 });

    const data = {
        ...commande,
        createdAt: new Date(commande.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }) + ' à ' + new Date(commande.updatedAt).getHours()+':'+new Date(commande.updatedAt).getMinutes(),
        updatedAt: new Date(commande.updatedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }) + ' à ' + new Date(commande.updatedAt).getHours()+':'+new Date(commande.updatedAt).getMinutes(),
    }

    return new Response(JSON.stringify(data), { status: 201 });
}





