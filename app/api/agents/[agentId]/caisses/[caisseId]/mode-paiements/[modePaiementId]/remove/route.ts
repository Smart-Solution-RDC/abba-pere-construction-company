

    import { ModePaiement } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
    import { NextRequest } from "next/server";
    
    interface RouteParams {
        params: {
            caisseId: string
            modePaiementId: string
        }
    }
    
    export async function DELETE (request: NextRequest, {params}: RouteParams) {
        const { modePaiementId, caisseId } = await params;
        
        const modePaiement = await prisma.modePaiement.findUnique({
            where: { id: parseInt(modePaiementId) },
        });
    
        if (!modePaiement) return new Response("Mode Piaement not found", { status: 404 });

        try {
            const updateModePaiement = await prisma.modePaiement.delete({
                where: { id: parseInt(modePaiementId) }
            });

            return new Response("Deleted!", { status: 201 });
        } catch (error) {
            return new Response("Invalid Form", { status: 400 });            
        }
    
        return new Response(JSON.stringify(modePaiement), { status: 201 });
    }
    
    
    
      