import { prisma } from "@/lib/prisma";
import { VenteRouteParams } from "@/prisma/definitions";


export async function GET(req: Request, { params }: VenteRouteParams) {
    const { venteId, agentId } = await params;

    const agent = await prisma.vente.findUnique({
        where: { id: parseInt(agentId) }
    });

    if (!agent) return new Response("Agent Not Found", { status: 404 });

    const vente = await prisma.vente.findUnique({
        where: { id: parseInt(venteId) },
        select: {
            id: true,
            nom: true,
            tel: true,
            statut: true,
            adresseLivraison: true,
            dateLivraison: true,
            notes: true,
            panier: {
                select: {
                    detailPaniers: {
                        select: {
                            produit: {
                                select: {
                                    designation: true,
                                    teneur: {
                                        select: {
                                            valeur: true
                                        }
                                    }
                                }
                            },
                            qtte: true,
                            prixTotalHT: true,
                        }
                    }
                }
            },
            client: {
                select: {
                    id: true,
                    picture: true,
                    nom_complet: true,
                    sexe: true,
                    adresses: {
                        select: {
                            ville: true,
                            adresse: true
                        }
                    },
                    contacts: {
                        select: {
                            tel: true
                        }
                    }
                }
            },
            fournisseur: {
                select: {
                    nom: true,
                    contacts: {
                        select: {
                            tel: true
                        }
                    }
                }
            },
            agent: {
                select: {
                    nom_complet: true,
                    role: true,
                    adresses: {
                        select: {
                            ville: true,
                            adresse: true
                        }
                    },
                    contacts: {
                        select: {
                            tel: true
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
                            code: true
                        }
                    }
                }
            },
            enregistrerPar: true,
            updatedAt: true
        }
    });

    if (!vente) return new Response("vente not found", { status: 404 });        

    return new Response(JSON.stringify(vente), { status: 201 });
}


