
import { prisma } from "@/lib/prisma";


export async function POST (req: Request) {
    const data = await req.json();
    try {
        const caisse = await prisma.caisse.create({
            data: {
                nom: data.nom,
                description: data.description ? data.description : null,
                soldeActuel: data.soldeActuel ? data.soldeActuel : 0,
                soldeInitial: data.soldeInitial ? data.soldeInitial : 0,
                deviseId: parseInt(data.deviseId),
                // statut: data.statut ? data.statut : null,
                creeParId: parseInt(data.creeParId)
            }
        });

        return new Response("Caisse Created!", { status: 201 });    
    } catch (error) {
        return new Response("Invalid Form!", { status: 201 });    
    }    
}