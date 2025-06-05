import { prisma } from "@/lib/prisma";

interface RouteParams { 
    utilisateurId: string
    teneurId: string
}


export async function DELETE(req: Request, { params }: { params: RouteParams}) {
    const { utilisateurId, teneurId } = await params;
    
    const utilisateur = await prisma.utilisateur.findUnique({
        where: {
            id: parseInt(utilisateurId)
        }
    });

    if (!utilisateur) {
        return new Response(JSON.stringify({ error: "The user dosn't exist" }), { status: 404 });
    }

    if (utilisateur.role === 'agent' && utilisateur.poste === "gerant") {
        await prisma.teneur.delete({
            where: {
                id: parseInt(teneurId, 10),
                utilisateurId: parseInt(utilisateurId)
            }
        });
        return new Response("Teneur was Deleted", { status: 200 });
    }

    return new Response(JSON.stringify({ error: "You can't execute this action" }), { status: 404 });
}
