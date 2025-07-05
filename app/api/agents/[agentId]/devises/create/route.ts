import { Devise } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";


export async function POST(request: Request, { params }: AgentRouteParams ) {
    const data: Devise = await request.json();
    const { agentId } = await params;

    try {

        await prisma.devise.create({
            data: {
                ...data,
                agentId: parseInt(agentId)
            }
        });

        const all = await prisma.devise.findMany();
        return new Response(JSON.stringify({
            message: "La devise a été creé!",
            data: all
        }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });
    }
        
}

 