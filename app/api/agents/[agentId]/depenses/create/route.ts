import { prisma } from "@/lib/prisma";

export async function POST(request: Request, { params }: { params: { agentId: string; caisseId: string } }) {
    const { agentId } = await params;
    const form = await request.json();
    
    try {

        // check if the amount is available in the caisse
        const caisse = await prisma.caisse.findUnique({
            where: { id: parseInt(form.caisseId) },
            select: {
                id: true,
                deviseId: true,
                ModePaiement: {
                    select: {
                        id: true,
                        type: true,
                        soldeActuel: true
                    }
                }
            }
        });

        if (!caisse) return new Response("Caisse not found", { status: 404 });

        let modePaiementId = 0;
        for (let i = 0; i < caisse.ModePaiement.length; i++) {
            const modePaiement = caisse.ModePaiement[i];
            if (modePaiement.type === form.modePaiement) {
                if (!modePaiement.soldeActuel) return new Response(`Montant Non Disponible en ${modePaiement.type}`, { status: 400 });
                if (modePaiement.soldeActuel < form.montant) {
                    return new Response(`Montant Non Disponible en ${modePaiement.type}`, { status: 400 });
                }
                modePaiementId = modePaiement.id;
            }
        }

        const depense = await prisma.depense.create({
            data: {
                referenceExterne: form.referenceExterne,
                motif: form.motif,
                description: form.description,
                caisseId: form.caisseId,
                agentId: parseInt(agentId),
            }
        });

        // // Paiement
        const paiement = await prisma.paiement.create({
            data: {
                modePaiementId: modePaiementId,
                montant: form.montant,
                depenseId: depense.id,
                caisseId: caisse.id,
                deviseId: caisse.deviseId
            }
        });

        // //  Update Mode Paiement
        const modePaiement = await prisma.modePaiement.update({
            where: { id: modePaiementId, caisseId: caisse.id },
            data: {
                soldeActuel: {
                    decrement: form.montant
                }
            }
        });

        return new Response(JSON.stringify(depense), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });
    }
}

