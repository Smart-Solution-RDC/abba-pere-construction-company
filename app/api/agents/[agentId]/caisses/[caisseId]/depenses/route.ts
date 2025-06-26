import { prisma } from "@/lib/prisma";
import { MouvementRouteParams } from "@/prisma/definitions";

export async function GET (request: Request, { params }: MouvementRouteParams ) {
    const { caisseId } = await params;

    const depenses = await prisma.depense.findMany({
        where: {caisseId: parseInt(caisseId)}
    });

    return new Response(JSON.stringify(depenses), { status: 201 });
}



 