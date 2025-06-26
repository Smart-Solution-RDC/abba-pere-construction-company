import { Panier } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AgentRouteParams } from "@/prisma/definitions";

export async function POST(request: Request, { params }: AgentRouteParams) {
    const data = await request.json();
    const { agentId } = await params;

    const agent = await prisma.agent.findUnique({
        where: { id: parseInt(agentId) }
    });

    if (!agent) return new Response("Agent Not found", { status: 201 }); 

    try {
        
        const findPanier = await prisma.panier.findFirst({
            where: { agent: { id: parseInt(agentId) }, statut: 'EN_COURS' },
            select: { id: true }
        });

        if (findPanier) {
            console.log(data);
            data.prixTotalHT = data.qtte * data.prixUnitaire;
            data.prixTotalTTC = data.prixTotalHT * 0.16;
            data.panierId = findPanier.id;
            
            const detailPanier = await prisma.detailPanier.create({
                data: data
            });

            const getAllDetail = await prisma.detailPanier.findMany({
                where: { agentd: parseInt(agentId), statut: 'EN_COURS' },
                select: {
                    id: true,
                    produit: {
                        select: {
                            designation: true
                        }
                    },
                    qtte: true,
                    prixUnitaire: true,
                    prixTotalHT: true,
                    devise: {
                        select: {
                            id: true,
                            code: true
                        }
                    }
                }
            });

            return new Response(JSON.stringify(data), { status: 201 });
        }
        
        // const panier = await prisma.panier.create({
        //     data: { agentId: parseInt(agentId)}
        // });

        // const detailPanier = await prisma.detailPanier.create({
        //     data: data
        // });

        // return new Response(JSON.stringify([]), { status: 201 });
            // } else {
                // await prisma.panier.update({
                //     where: {
                //         agentId: parseInt(agentId),
                //         statut: 'EN_COURS'
                //     },
                //     data: { statut: 'EN_COURS' }
                // });
                // return new Response("Statut updated!", { status: 201 });
            // }
        
        // }
        
    } catch (error) {
        return new Response(JSON.stringify({error: "Invalid Form"}), { status: 201 });
    }
}

 