import { prisma } from "@/lib/prisma";
import { AchatRouteParams } from "@/prisma/definitions";


export async function GET(req: Request, { params }: AchatRouteParams) {
    const { achatId, agentId } = await params;

    // the client does not send the agentId
    const agent = await prisma.achat.findUnique({
        where: { id: parseInt(agentId) }
    });

    if (!agent) return new Response(JSON.stringify({error: "Agent Not Found"}), { status: 404 });

    const achat = await prisma.achat.findUnique({
        where: { id: parseInt(achatId) },
        select: {
            id: true,
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
                            fournisseur: {
                                select: {
                                    nom: true
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotalHT: true,
                        }
                    }
                }
            },
            // client: {
            //     select: {
            //         id: true,
            //         nom_complet: true,
            //         adresses: {
            //             select: {
            //                 ville: true,
            //                 adresse: true
            //             }
            //         },
            //         contacts: {
            //             select: {
            //                 tel: true
            //             }
            //         }
            //     }
            // },
            // fournisseur: {
            //     select: {
            //         nom: true,
            //         contacts: {
            //             select: {
            //                 tel: true
            //             }
            //         }
            //     }
            // },
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
            entreprise: {
                select: {
                    raison_sociale: true,
                    forme_juridique: true,
                    rccm: true,
                    num_impot: true,
                    identification_nationale: true,
                    email: true,
                    slogan: true,
                    Contact: {
                        select: { tel: true }
                    },
                    Adresse: {
                        select: {adresse: true }
                    }
                }
            },
            // enregistrerPar: true,
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
    const achatResponse = achat
        ? {
            ...achat,
            updatedAt: (() => {
                const f = formatDate(achat.updatedAt);
                return f ? `${f.jour}/${f.mois}/${f.annee} à ${f.heure}` : null;
            })(),
        }
        : null;

    if (!achat) return new Response(JSON.stringify({error: "achat not found"}), { status: 404 });        

    return new Response(JSON.stringify(achatResponse), { status: 201 });
}


 