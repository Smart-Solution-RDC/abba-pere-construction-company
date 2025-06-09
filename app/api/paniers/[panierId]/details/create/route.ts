import { prisma } from "@/lib/prisma";
import { PanierParams } from "@/prisma/definitions";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest, { params }: PanierParams) {
    const { panierId } = await params
    // const panierId = requestParams.get('panierId');

    const data = await req.json();

    const produits = data.produits;
    
    for (let i=0; i < produits.length; i++) {
        produits[i].produitId = parseInt(produits[i].produitId, 10);
        produits[i].qtte = parseInt(produits[i].qtte, 10);
        produits[i].prixUnitaire = parseFloat(produits[i].prixUnitaire);
        produits[i].prixTotal = parseFloat(produits[i].prixUnitaire) * parseFloat(produits[i].qtte);
        produits[i].panierId = panierId && parseInt(panierId);
    }

    try {
        await prisma.detailPanier.createMany({
            data: produits           
        });

        return new Response("Detail Panier Added", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 201 });
    }
}





 