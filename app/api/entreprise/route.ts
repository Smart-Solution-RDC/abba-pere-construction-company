import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    const default_data = 1;

    const data = await prisma.entreprise.findUnique({
        where: {
            id: default_data
        }
    });

    return new Response(JSON.stringify(data), {
        status: 201
    });
}

export async function POST(req: Request) {
    return new Response("Impossible d'ajouter une information.", {
        status: 201
    });
}

export async function Put(req: Request) {
    const { id, nom, encronyme, code_postale, adresse, tel, site, email, decription, logo } = await req.json();
    
    await prisma.entreprise.update({
        where: { id },
        data: { nom, encronyme, code_postale, adresse, tel, site, email, decription, logo }
    })

    return new Response("Entreprise a été mise à jour...", {
        status: 201
    });
}

export async function DELETE(req: Request) {
    return new Response("Impossible de supprimer une information.", {
        status: 201
    });
}

