import { prisma } from "@/lib/prisma";
import { CaisseParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: CaisseParams ) {
    const { caisseId } = await params;

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) },
        select: {
            nom: true,
            description: true,
            soldeInitial: true,
            soldeActuel: true,
            utilisateur: {
                select: {
                    nom_complet: true
                }
            },
            devise: {
                select: {
                    nom: true,
                    code: true,
                    symbole: true
                }
            }
        }
    });

    if (!caisse) {
        return new Response("Caisse not Found", { status: 404 });
    }

    return new Response(JSON.stringify(caisse), { status: 201 });
} 