import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {    
    const produits = await prisma.produit.findMany({});
    return new Response(JSON.stringify(produits), { status: 200 });
}



