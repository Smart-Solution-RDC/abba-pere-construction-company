import { prisma } from "@/lib/prisma";

interface RouteParams { 
    panierId: string, 
    detailachatId: string 
}

export async function GET (req: Request, { params }: { params: RouteParams }) {
    const { panierId, detailachatId } = await params;
    const detailAchat = await prisma.detailAchat.findUnique({
        where: {
            id: parseInt(detailachatId, 10),
            panierId: parseInt(panierId, 10)
        }
    });

    if (!detailAchat) {
        return new Response(JSON.stringify({ error: "Detail Achat not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(detailAchat), { status: 201 });
}


export async function PUT (req: Request, { params }: { params: RouteParams }) {
    const { panierId, detailachatId } = await params;
    const data = await req.json();

    try {
        const updatedDetailAchat = await prisma.detailAchat.update({
            where: {
                id: parseInt(detailachatId, 10),
                panierId: parseInt(panierId, 10)
            },
            data: {
                produitId: parseInt(data.produitId, 10),
                qtte: parseInt(data.qtte, 10),
                prixUnitaire: parseFloat(data.prixUnitaire),
                prixTotal: parseFloat(data.prixUnitaire) * parseInt(data.qtte, 10)
            }
        });

        return new Response(JSON.stringify(updatedDetailAchat), { status: 200 });
    } catch (error) {
        return new Response("Detail Achat not found", { status: 404 });
    }
    
}


export async function DELETE (req: Request, { params }: { params: RouteParams }) {
    const { panierId, detailachatId } = await params;

    try {
        await prisma.detailAchat.delete({
            where: {
                id: parseInt(detailachatId, 10),
                panierId: parseInt(panierId, 10)
            }
        });

        return new Response("Detail Achat deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Detail Achat not found", { status: 404 });
    }
}

