import { prisma } from "@/lib/prisma";
import { ClientRouteParams } from "@/prisma/definitions";
import { getNomComplet } from "@/prisma/utils";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: ClientRouteParams) {
    const { clientId } = await params;
    const data = await request.json();

    data.nom_complet = getNomComplet(data.nom, data.presnom);

    const client = await prisma.client.findUnique({
        where: { id: parseInt(clientId) }
    })

    if (!client) return new Response("Not Found", { status: 404 });

    try {
        await prisma.client.update({
            where: { id: parseInt(clientId) },
            data: data
        });

        return new Response ("Updated!", { status: 201 });
    } catch (error) {
        return new Response ("Invalid Form!", { status: 500 });
    }

}