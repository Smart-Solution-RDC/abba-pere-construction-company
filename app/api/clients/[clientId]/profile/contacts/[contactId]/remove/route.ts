import { prisma } from "@/lib/prisma";
import { ContactRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";

export async function DELETE(request: NextRequest, { params }: ContactRouteParams) {
    const { clientId, contactId } = await params; 
    const change_type = parseInt(contactId);

    try {
        await prisma.contact.delete({
            where: {
                id: change_type,
                clientId: parseInt(clientId)
            }
        });
        
        return new Response("Contact was deleted", {status:200});
        
    } catch (error) {
        return new Response("Contact not found", { status: 404 });
    }
}