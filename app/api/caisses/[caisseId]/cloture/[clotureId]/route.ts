import { prisma } from "@/lib/prisma";
import { ClotureParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: ClotureParams) {
    const { caisseId, clotureId } = await params;

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId )}
    });

    if(!caisse) return new Response("Caisse Not Found", { status : 404 });

    const cloture = await prisma.clotureCaisse.findUnique({
        where: { id: parseInt(clotureId )}
    });

    if(!cloture) return new Response("Cloture Not Found", { status : 404 });

    const clotureCaisse = await prisma.clotureCaisse.findUnique({
        where: { id: cloture.id, caisseId: cloture.caisseId },
        select: {
            caisse: {
                select: {
                    nom: true,
                    soldeActuel: true,
                    devise: {
                        select: {
                            symbole: true,
                            code: true,
                            nom: true
                        }
                    },
                },
            },
            dateCloture: true,
            DetailClotureCaisse: {
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
                    qtteRestante: true
                }
            }
        }
    });

    return new Response (JSON.stringify(clotureCaisse), { status: 201 });
} 