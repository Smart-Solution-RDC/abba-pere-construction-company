import { prisma } from "@/lib/prisma";

interface MouvementParams {
    params: {
        mouvementId: string
    }
}

export async function GET(req: Request, { params }: MouvementParams) {
    const { mouvementId } = await params;

    const mouvemnent = await prisma.mouvementCaisse.findUnique({
        where: { id: parseInt(mouvementId) }
    });

    if (!mouvemnent) return new Response("Mouvement Caisse Not found!", { status: 404 });

    return new Response(JSON.stringify(mouvemnent), { status: 201 });
    
} 