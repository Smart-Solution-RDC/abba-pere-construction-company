import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

interface RouteParams {
    params: {
        agentId: string
        caisseId: string
    }
}

export async function GET (request: NextRequest, {params}: RouteParams) {
    const { agentId, caisseId } = await params;


    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) },
    });

    if (!caisse) return new Response("Caisse not found", { status: 404 });

    const modePaiement = await prisma.modePaiement.findMany({
        where: {
            caisseId: parseInt(caisseId)
        }
    });

    return new Response(JSON.stringify(modePaiement), { status: 201 });
}



 