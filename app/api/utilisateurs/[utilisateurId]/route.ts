import { prisma } from "@/lib/prisma";
import { UtilisateurParams } from "@/prisma/definitions";


export async function GET(req: Request, { params }: UtilisateurParams) {
    const { utilisateurId } = await params; 
    
    const user = await prisma.utilisateur.findUnique({
        where: { id: parseInt(utilisateurId, 10) }
    })

    if (!user) {
        return new Response("User isn't exist", { status: 400 }) 
    }

    return new Response(JSON.stringify(user), { status: 201 });
}



