import { prisma } from "@/lib/prisma";

interface RouteParams { 
    params: { 
        caisseId: string
    }
}


export async function GET (req: Request, { params }: RouteParams ) {
    const { caisseId } = await params;

    const caisse = await prisma.caisse.findFirst({
        where: { id: parseInt(caisseId) },
        select: {
            nom: true,
            description: true,
            soldeInitial: true,
            soldeActuel: true,
            utilisateur: {
                select: {
                    nom_complet: true
                }
            },
            devise: {
                select: {
                    nom: true,
                    code: true,
                    symbole: true
                }
            }
        }
    });

    if (!caisse) {
        return new Response("Caisse not Found", { status: 404 });
    }

    return new Response(JSON.stringify(caisse), { status: 201 });
}

export async function PUT (req: Request, { params }: RouteParams ) {
    const { caisseId } = await params;
    const data = await req.json();

    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) }
    });

    if (!caisse) {
        return new Response("Caisse Not Found", { status: 404 });
    }

    try {
        await prisma.caisse.update({
            where: { id: caisse.id },
            data: {
                nom: data.nom,
                description: data.description,
                soldeActuel: data.soldeActuel,
                soldeInitial: data.soldeInitial,
                deviseId: data.deviseId,
                statut: data.statut ? data.statut : null,
                creeParId: data.creeParId
            }
        });
        return new Response("Caisse Updated", { status: 201 });
    } catch (error) {
        return new Response("Caisse Not Found", { status: 201 });   
    }
}

export async function DELETE (req: Request, { params }: RouteParams ) {
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

