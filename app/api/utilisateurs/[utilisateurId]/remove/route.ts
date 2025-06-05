import { prisma } from "@/lib/prisma";
import { UtilisateurParams } from "@/prisma/definitions";



export async function DELETE(req: Request, { params }: UtilisateurParams) {
    const { utilisateurId } = await params;

    try {
        await prisma.utilisateur.delete({
            where: { id: parseInt(utilisateurId, 10) }
        });
        return new Response("User was removed", { status: 201 });        
    } catch (error) {
        return new Response("User wasn't found", { status: 500 });
    }    
}
