import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { checkTable, updateCaisseMouvement } from "@/prisma/utils";
import { Decimal } from "@prisma/client/runtime/library";

interface RouteParams { 
    params: { 
        caisseId: string
    }
}

export async function GET (req: Request, { params }: RouteParams) {
    const { caisseId } = await params;

    const caisse = await checkTable(req, 'caisse', caisseId);
    if (!caisse) return new Response("Caisse not Found", { status: 404 });

    const mouvements = await prisma.mouvementCaisse.findMany({
        where: { caisseId: parseInt(caisseId) }
    });
    
    return new Response(JSON.stringify(mouvements), { status: 201 });
}

export async function POST (req: Request, { params }: RouteParams) {
    const { caisseId } = await params;
    const data = await req.json();

    const caisse = await prisma.caisse.findFirst({
        where: { id: parseInt(caisseId) }
    });

    if(!caisse) return new Response("Caisse not Found", { status: 201 });
    if(caisse.soldeActuel < data.montant) return new Response("Solde Insuffisant!", { status: 201 });
    
    try {        
        
        let montantMouvement = updateCaisseMouvement(data.type_mouvement, caisse.soldeActuel, data.montant);
        // put it inside the updateCaisseMouvement* function...
        const updateCaisse = await prisma.caisse.update({
            where: { id: parseInt(caisseId) },
            data: { soldeActuel: montantMouvement }
        });

        // The deviseId attr will match with the caisse's attr
        const mouvementCaisse = await prisma.mouvementCaisse.create({
            data: {
                caisseId: parseInt(caisseId),
                type_mouvement: data.type_mouvement,
                moyenPaiement: data.moyenPaiement,
                montant: data.montant,
                enregistrerParId: parseInt(data.enregistrerParId),
                // Si cette valeur est nulle, affichez ID*
                referenceExterne: data.referenceExterne ? data.referenceExterne : null,
                description: data.description ? data.description : null,
            }
        });

        return new Response("Create Mouvement!", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form!", { status: 404 });
    }
} 





