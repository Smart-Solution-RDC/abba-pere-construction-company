import { prisma } from "@/lib/prisma";
import { VenteRouteParams } from "@/prisma/definitions";


export async function GET(req: Request, { params }: VenteRouteParams) {
    const { venteId } = await params;

    const vente = await prisma.vente.findUnique({
        where: { id: parseInt(venteId, 10) }
    });

    if (!vente) {
        return new Response("vente not found", { status: 201 });        
    }

    return new Response(JSON.stringify(vente), { status: 201 });
}


