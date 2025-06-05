import { prisma } from "@/lib/prisma";
import { ProduitParams } from "@/prisma/definitions";


export async function PUT(req: Request, { params }: ProduitParams) {
    const { produitId } = await params;
    const { designation, prix, description } = await req.json();
    
    try {
        await prisma.produit.update({
            where: {
                id: parseInt(produitId, 10)
            },
            data: {
                designation,
                prix: parseFloat(prix),
                description
            }
        });

        return new Response("Produit was updated", { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
    }   
}
