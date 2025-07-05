import { Produit } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";

export async function POST(request: Request, { params }: AgentRouteParams) {
    const data: Produit = await request.json();
    const { agentId } = await params;

    try {
        await prisma.produit.create({
            data: { ...data, agentId: parseInt(agentId) }
        });

        const all = await prisma.produit.findMany({
            select: {
                id: true,
                designation: true,
                prixUnitaire: true,
                teneur: {
                    select: {
                        valeur: true
                    }
                },
                typeProduit: true,
                autresType: true,
                qtteDisponible: true,
                deviseId: true,
                devise: {
                    select: {
                        id: true,
                        code: true,
                        tauxDEchange: true
                    }
                }
            }
        })

        return new Response(JSON.stringify({
            message: "Le produit a été enregistré!",
            data: all
        }), { status: 201 });
        
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });
    }    
}

