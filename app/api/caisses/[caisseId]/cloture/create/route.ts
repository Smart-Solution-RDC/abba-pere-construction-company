import { prisma } from "@/lib/prisma";
import { ClotureRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";
import { Select } from "react-day-picker";

export async function POST (req: NextRequest, { params }: ClotureRouteParams) {
    const { caisseId } = await params;
    const data = await req.json();
    const { dateCloture } = data;

    const aujourdhui = dateCloture ? new Date(dateCloture) : new Date();

    const caisse = await prisma.caisse.findUnique({
            where: { id: parseInt(caisseId )}
        });

    if(!caisse) return new Response("Caisse Not Found", { status : 201 });

    const debutAujourdhuiUTC = new Date(
        Date.UTC(
        aujourdhui.getFullYear(),
        aujourdhui.getMonth(),
        aujourdhui.getDate(),
        0, 0, 0, 0 // Heure, minute, seconde, milliseconde
        )
    );

    const finAujourdhuiUTC = new Date(
        Date.UTC(
        aujourdhui.getFullYear(),
        aujourdhui.getMonth(),
        aujourdhui.getDate(),
        23, 59, 59, 999 // Heure, minute, seconde, milliseconde
        )
    );    

    const ventesJournalier = await prisma.vente.findMany({
        where: {
            statut: 'CONFIRME',
            updatedAt: {
                gte: debutAujourdhuiUTC,
                lte: finAujourdhuiUTC 
            },
        },
        select: {
            panier: {
                select: {
                    DetailPanier: {
                        select: {
                            produit: {
                                select: {
                                    id: true,
                                    qtte: true, // La qtte disponible en stock...
                                    designation: true,
                                    devise: {
                                        select: {
                                            symbole: true
                                        }
                                    },
                                    teneur: {
                                        select: {
                                            id: true,
                                            valeur: true
                                        }
                                    }
                                }
                            },
                            qtte: true,
                            prixUnitaire: true,
                            prixTotal: true                            
                        }
                    }
                }
            },
            total_ht: true,
            total_ttc: true,
        }
    });

    let soldeJournalierParCaisse = 0
    let detail_cloture_caisse = [];

    const cloture_caisse = await prisma.clotureCaisse.create({
        data: {
            caisseId: caisse.id,
            dateCloture : data.dateCloture,
            utilisateurClotureId : data.utilisateurClotureId,
            notes: data.notes ? data.notes : null
        }
    });

    for (let i = 0; i < ventesJournalier.length; i++) {
        soldeJournalierParCaisse += ventesJournalier[i].total_ht;
        detail_cloture_caisse.push({
            produitId: ventesJournalier[i].panier.DetailPanier[i].produit.id,
            teneurId: ventesJournalier[i].panier.DetailPanier[i].produit.teneur.id,
            qtteRestante: ventesJournalier[i].panier.DetailPanier[i].produit.qtte,
            clotureCaisseId: cloture_caisse.id
        });
    }

    // detail_cloture_caisse. 
    await prisma.detailClotureCaisse.createMany({
        data: detail_cloture_caisse
    });    

    return new Response ("Cloture Caisse created!", { status: 201 });
}

