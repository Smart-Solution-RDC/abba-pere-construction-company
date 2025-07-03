import { prisma } from "@/lib/prisma";
import { VenteRouteParams } from "@/prisma/definitions";
import { checkTable } from "@/prisma/utils";

export async function DELETE(req: Request, { params }: VenteRouteParams) {
    const { agentId, venteId } = await params;

    const agent = await checkTable('agent', agentId);
    if (!agent) return new Response(JSON.stringify({error: "Erreur! Réessayer plus tard!"}));

    try {
        const vente = await prisma.vente.delete({
            where: { id: parseInt(venteId, 10) }
        })
        return new Response(JSON.stringify({message: "La vente a été supprimé!"}), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Erreur! La vente n'a pas été trouvé"}), { status: 201 });
    }
}