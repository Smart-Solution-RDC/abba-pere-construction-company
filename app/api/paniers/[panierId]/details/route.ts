import { prisma } from "@/lib/prisma";
import { PanierParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest, { params }: PanierParams) {
    const { panierId } = await params
    
    if (panierId) {

        const panier = await prisma.panier.findUnique({
            where: { id: parseInt(panierId, 10) }
        });

        if (!panier) {
            return new Response("Detail not found", { status: 200 });
        }

        const detailPanier = await prisma.detailPanier.findMany({
            where: { panierId: parseInt(panierId, 10) }
        });
        return new Response(JSON.stringify(detailPanier), { status: 200 });
    }

    return new Response("Panier required", { status: 200 });    
}






