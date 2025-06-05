import { prisma } from "@/lib/prisma";

interface RouteParams { 
    utilisateurId: string
    teneurId: string
}

export async function GET(req: Request, { params }: { params: RouteParams}) {
    const { teneurId, utilisateurId } = await params;

    const utilisateur = await prisma.utilisateur.findUnique({
        where: {
            id: parseInt(utilisateurId)
        }
    });

    if (!utilisateur) {
        return new Response(JSON.stringify({ error: "The user dosn't exist" }), { status: 404 });
    }

    const teneurs = await prisma.teneur.findUnique({
        where: {
            id: parseInt(teneurId, 10)
        }
    });

    return new Response(JSON.stringify(teneurs), { status: 200 });
} 