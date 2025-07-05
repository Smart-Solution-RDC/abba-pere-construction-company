import { prisma } from "@/lib/prisma";
import { DeviseRouteParams } from "@/prisma/definitions";


export async function DELETE(req: Request, { params }: DeviseRouteParams) {
    const { deviseId } = await params;


    try {
        await prisma.devise.delete({
            where: { id: parseInt(deviseId)}
        });
        
        const all = await prisma.devise.findMany();
        return new Response(JSON.stringify({
            message: "La devise a été supprimé!",
            data: all
        }), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({error: "Erreur de suppression!"}));
    }

} 