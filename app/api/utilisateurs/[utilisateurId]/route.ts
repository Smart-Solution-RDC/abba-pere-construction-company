import { prisma } from "@/lib/prisma";

interface RouteParams { 
    utilisateurId: string
}

export async function GET(req: Request, { params }: { params: RouteParams}) {
    const { utilisateurId } = await params; 
    
    const user = await prisma.utilisateur.findUnique({
        where: { id: utilisateurId }
    })

    if (!user) {
        return new Response("User isn't exist", { status: 400 }) 
    }

    return new Response(JSON.stringify(user), { status: 201 });
}

export async function PUT(req: Request, { params }: { params: RouteParams}) {
    // Valid form
    const { nom, postnom, email, role, poste, sexe } = await req.json();
    const nom_complet = `${nom + ' ' + postnom}`
    const { utilisateurId } = await params; 

    const user = await prisma.utilisateur.findUnique({
        where: { id: utilisateurId }
    });

    if (!user) {
        return new Response("User wasn't found", { status: 201 }); 
    } else {

        const user = await prisma.utilisateur.update({
            where: { id: utilisateurId },
            data: { nom, postnom, email, nom_complet, role, poste, sexe }
        });

        return new Response("User was updated", { status: 201 });
    }
}

export async function DELETE(req: Request, { params }: { params: RouteParams}) {
    const { utilisateurId } = await params;

    try {
        await prisma.utilisateur.delete({
            where: { id: utilisateurId }
        });
        return new Response("User was removed", { status: 201 });        
    } catch (error) {
        return new Response("User wasn't found", { status: 500 });
    }    
}

