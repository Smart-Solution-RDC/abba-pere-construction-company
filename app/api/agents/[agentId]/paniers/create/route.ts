import { Panier } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";
import { checkTable } from "@/prisma/utils";

export async function POST(request: Request, { params }: AgentRouteParams) {
    const data = await request.json();
    const { agentId, clientId } = await params;
    let agent: any | null = null;
    let client: any | null = null;
    if (agentId) {
        agent = await checkTable('agent', agentId);
    }

    if (clientId) {
        client = await checkTable('client', clientId);
    }

    if (!agent && !client) return new Response(JSON.stringify({error: "Informations de l'utilisateurs non valide."}), { status: 201 }); 

    try {

        // Recupere les details du panier si il existe
        // sinon cree le.
        // const getData = async ({table, id}: {table: string, id: number}) => {
        //     const verify = await prisma.panier.findFirst({
        //         where: { 
        //             agentId: table === 'agent' ? id : null, 
        //             clientId: table === 'client' ? id : null, 
        //             statut: 'EN_COURS' 
        //         }
        //     });

        //     if (verify) {
        //         const getDetailPanier = await prisma.detailPanier.findMany({
        //             where: { panierId: verify.id }
        //         });
        //         return getDetailPanier;
        //     }
        // }

        // const t = await getData(agent ? {table: 'agent', id: agent.id} : {table: 'client', id: client.id});

        const panier = await prisma.panier.create({ 
            data: { agentId: parseInt(agentId), clientId: parseInt(clientId) } 
        });

        return new Response(JSON.stringify({ data: panier.id }), { status: 201 });
        
    } catch (error) {
        return new Response(JSON.stringify({error: "Erreur! Réessayer plus tard !"}), { status: 201 });
    }
}

 