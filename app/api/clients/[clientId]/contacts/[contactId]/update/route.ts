import { prisma } from "@/lib/prisma";
import { ContactRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";

export async function PUT (request: NextRequest, { params }: ContactRouteParams) {
    const { clientId, contactId } = await params; 
    const change_type = parseInt(contactId, 10);
    
    const data = await request.json();

    try {
        await prisma.contact.update({
            where: {
                id: change_type,
                clientId: parseInt(clientId, 10)
            },
            data: data
        });
        
        return new Response("Contact was updated", {status:200});
        
    } catch (error) {
        return new Response("Contact not found", { status: 404 });
    }
}


