import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    const achats = await prisma.achat.findMany({
        // where: {},
        select: {
            statut: true,
            utilisateur: {
                select: {
                    nom_complet: true,
                }
            },
            panier: {
                select: {
                    DetailPanier: {
                        select: {
                            produit: {
                                select: {
                                    designation: true,
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotal: true
                        }
                    }
                }
            },
            paiement: {
                select: {
                    montant: true,
                    devise: {
                        select: {
                            nom: true,
                            code: true,
                            symbole: true,
                        }
                    },
                }
            },
            fournisseur: {
                select: {
                    nom: true,
                    email: true
                }
            }
        }
    });
    return new Response(JSON.stringify(achats), { status: 501 });
}





