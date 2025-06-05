import { prisma } from "@/lib/prisma";
import { ProduitParams } from "@/prisma/definitions";


export async function DELETE(req: Request, { params }: ProduitParams) {
    const { produitId } = await params;

    try {
        await prisma.produit.delete({
            where: {
                id: parseInt(produitId, 10)
            }
        });    

        return new Response("Produit was deleted", { status: 200 }); 

    } catch (error) {
        return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
    }    
}

 