import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, { params }: AgentRouteParams) {
    const { clientId } = await params; 

    const data = await request.json();

    const contact = await prisma.contact.create({
        data: {
            ...data,
            clientId: clientId
        }
    });

    return new Response("Contact was added", {status:201});
}