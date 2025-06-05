import { prisma } from "@/lib/prisma";
import { UtilisateurParams } from "@/prisma/definitions";


export async function PUT(req: Request, { params }: UtilisateurParams) {
    // Valid form
    const { nom, postnom, email, role, poste, sexe, picture } = await req.json();
    const nom_complet = `${nom + ' ' + postnom}`
    const { utilisateurId } = await params; 

    const user = await prisma.utilisateur.findUnique({
        where: { id: parseInt(utilisateurId, 10) }
    });

    if (!user) {
        return new Response("User wasn't found", { status: 201 }); 
    } 

    
    await prisma.utilisateur.update({
        where: { id: parseInt(utilisateurId, 10) },
        data: { nom, postnom, email, nom_complet, role, poste, picture, sexe }
    });

    return new Response("User updated", { status: 201 })
}
