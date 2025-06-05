import { prisma } from "@/lib/prisma";
import { CaisseParams } from "@/prisma/definitions";


export async function DELETE (req: Request, { params }: CaisseParams ) {
    const { caisseId } = await params;

    try {
        await prisma.caisse.delete({
            where: {
                id: parseInt(caisseId, 10)
            }
        });    

        return new Response("Caisse Removed", { status: 200 }); 

    } catch (error) {
        return new Response(JSON.stringify({ error: "Caisse Not found" }), { status: 404 });
    } 
}

