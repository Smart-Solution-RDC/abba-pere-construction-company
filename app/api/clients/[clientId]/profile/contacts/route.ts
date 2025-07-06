
import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: AgentRouteParams) {
    
    const { clientId } = await params; 

    const contact = await prisma.contact.findMany({
        where: { clientId: parseInt(clientId, 10) }
    });

    if (!contact) {
        return new Response("Contact not found", { status: 404 });
    }
    
    return new Response(JSON.stringify(contact), {status:200});
}

