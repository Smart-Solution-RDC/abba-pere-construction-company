

    import { prisma } from "@/lib/prisma";
    import { NextRequest } from "next/server";
    
    interface RouteParams {
        params: {
            caisseId: string
            modePaiementId: string
        }
    }
    
    export async function GET (request: NextRequest, {params}: RouteParams) {
        const { modePaiementId, caisseId } = await params;
    
    
        const modePaiement = await prisma.modePaiement.findUnique({
            where: { id: parseInt(modePaiementId) },
        });
    
        if (!modePaiement) return new Response("Mode Piaement not found", { status: 404 });
    
        return new Response(JSON.stringify(modePaiement), { status: 201 });
    }
    
    
    
     