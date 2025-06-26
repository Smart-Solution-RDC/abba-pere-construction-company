import { Depense } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request, { params }: { params: { agentId: string; caisseId: string } }) {
    const { agentId, caisseId } = await params;
    const form: Depense = await request.json();

    form.type == '' && `Achat des fourniturs`;
    
    try {
        
        const depense = await prisma.depense.create({
            data: {
                ...form,
                agentId: parseInt(agentId),
                caisseId: parseInt(caisseId)
            }
        });

        return new Response(JSON.stringify(depense), { status: 201 });
    } catch (error) {
        return new Response("Error processing request", { status: 500 });
    }

    // const depense = await prisma.depense.create({
    //     data: {
    //         modePaiement,
    //         date: new Date(date),
    //         caisseId: parseInt(caisseId),
    //         agentId: parseInt(agentId)
    //     }
    // });

    return new Response(JSON.stringify(form), { status: 201 });
}