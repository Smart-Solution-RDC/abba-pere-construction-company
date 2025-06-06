import { prisma } from "@/lib/prisma";
import { ClotureRouteParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: ClotureRouteParams) {
    const { caisseId } = await params;

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId )}
    });

    if(!caisse) return new Response("Caisse Not Found", { status : 201 });

    const clotureCaisse = await prisma.clotureCaisse.findMany({
        where: { caisseId: caisse.id }
    });

    return new Response (JSON.stringify(clotureCaisse), { status: 201 });
}