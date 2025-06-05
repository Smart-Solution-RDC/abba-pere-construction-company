import { prisma } from "@/lib/prisma";
import { MouvementParams } from "@/prisma/definitions";

export async function GET (req: Request, { params }: MouvementParams ) {
    const { caisseId } = await params;

    const mouvementCaisse = await prisma.mouvementCaisse.findMany({
        where: {caisseId: parseInt(caisseId)}
    });

    return new Response(JSON.stringify(mouvementCaisse), { status: 201 });
}



 