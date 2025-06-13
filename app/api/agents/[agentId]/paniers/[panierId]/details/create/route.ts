import { prisma } from "@/lib/prisma";
import { DetailPanierForm, PanierRouteParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest, { params }: PanierRouteParams) {
    const { panierId } = await params;
    const data: DetailPanierForm = await request.json();

    const produits = data.produits;
    
    for (let i=0; i < produits.length; i++) {
        produits[i].prixTotal = produits[i].prixUnitaire * produits[i].qtte;
        produits[i].panierId = parseInt(panierId);
    }

    try {
        await prisma.detailPanier.createMany({
            data: produits           
        });

        return new Response("Detail Panier Added!", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 201 });
    }
}





 