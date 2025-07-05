import { Devise } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { DeviseRouteParams } from "@/prisma/definitions";


export async function PUT (request: Request, { params }: DeviseRouteParams) {
    const { deviseId, agentId } = await params;
    const data: Devise = await request.json();

    const agent = await prisma.agent.findUnique({
        where: { id: parseInt(agentId)}
    });

    if (!agent) return new Response(JSON.stringify({error: "Agent Not Found!"}), { status: 404 });

    try {
        await prisma.devise.update({
            where: { id: parseInt(deviseId) },
            data: data
        });

        const all = await prisma.devise.findMany();
        return new Response(JSON.stringify({
            message: "La devise a été mis à jour!",
            data: all
        }), { status: 201 });   
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });   
    }
}  

