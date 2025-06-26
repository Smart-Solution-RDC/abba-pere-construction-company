import { prisma } from "@/lib/prisma";

interface RouteParams {
    params: {
        caisseId: string
    }
}

export async function GET (request: Request, {params}: RouteParams) {
    const { caisseId } = await params;

    const caisse = await prisma.caisse.findMany({
        select: {
            id: true,
            nom: true,
            statut: true,
            devise: {
                select: {
                    code: true,
                    symbole: true
                }
            },
        }
    });

    return new Response(JSON.stringify(caisse), { status: 201 });
}



