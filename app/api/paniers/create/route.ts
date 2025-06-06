import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const { utilisateurId } = await req.json();

    try {
        await prisma.panier.create({
            data: { utilisateurId: parseInt(utilisateurId) }
        });
    
        return new Response("Panier Created!", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 201 });
    }
}

 