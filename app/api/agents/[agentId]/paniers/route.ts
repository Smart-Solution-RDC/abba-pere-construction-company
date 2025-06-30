import { prisma } from "@/lib/prisma";
import { PanierRouteParams } from "@/prisma/definitions";
import { checkTable } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest, { params }: PanierRouteParams) {
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
    
    // verify panier with statut* attr
    const panier = await prisma.panier.findFirst({
        where: { 
            agentId: parseInt(agentId), 
            // clientId: parseInt(agentId), 
            statut: 'EN_COURS' },
        select: { id: true }
    });
    
    return new Response(JSON.stringify({ data: panier?.id }), { status: 201 });
        
}




