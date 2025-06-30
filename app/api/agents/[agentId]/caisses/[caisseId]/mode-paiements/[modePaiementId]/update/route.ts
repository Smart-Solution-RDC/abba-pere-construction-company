

    import { ModePaiement } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
    import { NextRequest } from "next/server";
    
    interface RouteParams {
        params: {
            caisseId: string
            modePaiementId: string
        }
    }
    
    export async function PUT (request: NextRequest, {params}: RouteParams) {
        const { modePaiementId, caisseId } = await params;
        const form: ModePaiement = await request.json();
    
        const modePaiement = await prisma.modePaiement.findUnique({
            where: { id: parseInt(modePaiementId) },
        });
    
        if (!modePaiement) return new Response("Mode Piaement not found", { status: 404 });

        try {
            const updateModePaiement = await prisma.modePaiement.update({
                where: { id: parseInt(modePaiementId) },
                data: {
                    ...form,
                    caisseId: parseInt(caisseId)
                },
                select: {
                    id: true,
                    type: true,
                    soldeActuel: true
                }                    
            });

            return new Response(JSON.stringify(updateModePaiement), { status: 201 });
        } catch (error) {
            return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });;            
        }
    }
    
    
    
    