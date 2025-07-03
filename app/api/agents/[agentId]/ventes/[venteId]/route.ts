import { prisma } from "@/lib/prisma";
import { VenteRouteParams } from "@/prisma/definitions";


export async function GET(req: Request, { params }: VenteRouteParams) {
    const { venteId, agentId } = await params;

    //verify id and role of every request...
    // const agent = await prisma.vente.findUnique({
    //     where: { id: parseInt(agentId) }
    // });

    // if (agent) return new Response(JSON.stringify({error: "Agent Not Found"}), { status: 201 });

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
                            devise: {
                                select: {
                                    symbole: true
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotalHT: true,
                        }
                    }
                }
            },
            client: {
                select: {
                    id: true,
                    nom_complet: true,
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
                    id: true,
                    nom_complet: true,
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
                            symbole: true
                        }
                    }
                }
            },
            enregistrerPar: true,
            createdAt: true,
            updatedAt: true
        }
    });

    function formatDate(date: Date | string | null) {
        if (!date) return null;
        const d = date instanceof Date ? date : new Date(date);
        return {
            jour: d.getDate(),
            mois: d.getMonth() + 1,
            annee: d.getFullYear(),
            heure: d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        };
    }
    const venteResponse = vente
        ? {
            ...vente,
            dateLivraison: (() => {
                const f = formatDate(vente.dateLivraison);
                return f ? `${f.jour}/${f.mois}/${f.annee}` : null;
            })(),
            createdAt: (() => {
                const f = formatDate(vente.createdAt);
                return f ? `${f.jour}/${f.mois}/${f.annee} à ${f.heure}` : null;
            })(),
            updatedAt: (() => {
                const f = formatDate(vente.createdAt);
                return f ? `${f.jour}/${f.mois}/${f.annee} à ${f.heure}` : null;
            })(),
        }
        : null;

    if (!vente) return new Response(JSON.stringify({error: "vente not found"}), { status: 404 });        

    return new Response(JSON.stringify(venteResponse), { status: 201 });
}


