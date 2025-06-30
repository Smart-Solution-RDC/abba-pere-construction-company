import { ModePaiement } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams { 
    params: { 
        agentId: string; 
        caisseId: string 
    } 
}

export async function POST(request: NextRequest, { params }: RouteParams) {
    const { agentId, caisseId } = await params;
    const form: ModePaiement = await request.json();

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) },
    });

    if (!caisse) return new Response("Caisse not found", { status: 404 });

    try {
        const modePaiement = await prisma.modePaiement.create({
            data: {
                ...form,
                caisseId: parseInt(caisseId)
            },
        });

        return new NextResponse(JSON.stringify(modePaiement), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });;
    }
}