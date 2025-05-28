import { prisma } from "@/lib/prisma";

interface RouteParams {
    panierId: string
}

export async function GET(req: Request, { params }: { params: RouteParams }) {
    const { panierId } = await params;

    const detailAchat = await prisma.detailAchat.findMany({
        where: {
            panierId: parseInt(panierId, 10)
        }
    });

    return new Response(JSON.stringify(detailAchat), { status: 200 });
}

export async function POST(req: Request, { params }: { params: RouteParams }) {
    const { panierId } = await params;
    const data = await req.json();

    const produits = data.produits;
    
    for (let i=0; i < produits.length; i++) {
        produits[i].produitId = parseInt(produits[i].produitId, 10);
        produits[i].qtte = parseInt(produits[i].qtte, 10);
        produits[i].prixUnitaire = parseFloat(produits[i].prixUnitaire);
        produits[i].prixTotal = parseFloat(produits[i].prixUnitaire) * parseFloat(produits[i].qtte);
        produits[i].panierId = parseInt(panierId, 10);
    }

    try {
        await prisma.detailAchat.createMany({
            data: produits           
        });

        return new Response("Achat Created!", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 201 });
    }
}





