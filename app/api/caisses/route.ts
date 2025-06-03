import { prisma } from "@/lib/prisma";


export async function GET (req: Request) {
    const caisses = await prisma.caisse.findMany({});
    return new Response(JSON.stringify(caisses), { status: 201 });
}

export async function POST (req: Request) {
    const data = await req.json();
    try {
        const caisse = await prisma.caisse.create({
            data: {
                nom: data.nom,
                description: data.description ? data.description : null,
                soldeActuel: data.soldeActuel ? data.soldeActuel : 0,
                // soldeInitial: data.soldeInitial,
                deviseId: parseInt(data.deviseId),
                // statut: data.statut ? data.statut : null,
                creeParId: parseInt(data.creeParId)
            }
        });

        return new Response("Caisse created", { status: 201 });    
    } catch (error) {
        return new Response("Invalid Form!", { status: 201 });    
    }    
}