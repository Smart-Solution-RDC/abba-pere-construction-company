import { prisma } from "@/lib/prisma";
import { CreateMouvementCaisse, UpdateCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const idCommande = searchParams.get('id');

    const commandes = await prisma.commande.findMany({
        // where: { OR: [{ id: idCommande ? { contains: id, mode: 'insensitive' } : undefined }]}
    });
    return new Response(JSON.stringify(commandes));
}
