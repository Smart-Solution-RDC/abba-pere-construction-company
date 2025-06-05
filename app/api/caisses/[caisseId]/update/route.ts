import { prisma } from "@/lib/prisma";
import { CaisseParams } from "@/prisma/definitions";

export async function PUT (req: Request, { params }: CaisseParams ) {
    const { caisseId } = await params;
    const data = await req.json();

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) }
    });

    if (!caisse) return new Response("Caisse Not Found", { status: 404 });

    try {
        await prisma.caisse.update({
            where: { id: caisse.id },
            data: {
                nom: data.nom,
                description: data.description,
                soldeActuel: data.soldeActuel,
                soldeInitial: data.soldeInitial,
                deviseId: data.deviseId,
                statut: data.statut ? data.statut : null,
                creeParId: data.creeParId
            }
        });
        return new Response("Caisse Updated", { status: 201 });
    } catch (error) {
        return new Response("Caisse Not Found", { status: 201 });   
    }
}
