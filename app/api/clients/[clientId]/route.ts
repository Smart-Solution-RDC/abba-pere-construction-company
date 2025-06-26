import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { clientId: string } }) {
    const { clientId } = params;

    // Assuming you have a function to fetch client data
    const client = await prisma.client.findUnique({
        where: { id: parseInt(clientId) }
    });

    if (!client) {
        return new Response("Client not found", { status: 404 });
    }

    return new Response(JSON.stringify(client), { status: 200 });
    
}