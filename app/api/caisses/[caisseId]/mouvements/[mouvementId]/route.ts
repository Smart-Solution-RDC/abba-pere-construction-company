import { Decimal } from "@/app/generated/prisma/runtime/library";
import { prisma } from "@/lib/prisma";
import { checkTable, updateCaisseMouvement } from "@/prisma/utils";

interface RouteParams { 
    params: { 
        caisseId: string
        mouvementId: string
    }
}


export async function GET (req: Request, { params }: RouteParams ) {
    const { caisseId, mouvementId } = await params;

    const mouvementCaisse = await prisma.mouvementCaisse.findUnique({
        where: { id: parseInt(mouvementId), caisseId: parseInt(caisseId) },
        select: {
            caisse: {
                select: {
                    nom: true
                }
            },
            type_mouvement: true,
            moyenPaiement: true,
            montant: true,
            description: true 
        }
    });

    if (!mouvementCaisse) {
        return new Response("Mouvement Caisse not Found", { status: 404 });
    }

    return new Response(JSON.stringify(mouvementCaisse), { status: 201 });
}

export async function PUT (req: Request, { params }: RouteParams ) {
    const { mouvementId, caisseId } = await params;
    const data = await req.json();

    // Check caisse table
    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(caisseId) }
    });
    if (!caisse) return new Response("Caisse not Found", { status: 404 });

    // check mouvement caisse
    const mouvementCaisse = await checkTable(req, 'mouvementCaisse', mouvementId);
    if (!mouvementCaisse) return new Response("mouvementCaisse not Found", { status: 404 });

    let soldeActuel = caisse.soldeActuel;

    try {

        await prisma.mouvementCaisse.update({
            where: { id: mouvementCaisse.id },
            data: {
                caisseId: parseInt(caisseId),
                type_mouvement: data.type_mouvement,
                moyenPaiement: data.moyenPaiement,
                montant: data.montant,
                enregistrerParId: parseInt(data.enregistrerParId),
                description: data.description ? data.description : null,
                referenceExterne: data.referenceExterne ? data.referenceExterne : null,
            }
        });

        let montantMouvement = updateCaisseMouvement(data.type_mouvement, caisse.soldeActuel, data.montant);
        // put it inside the updateCaisseMouvement* function...
        const updateCaisse = await prisma.caisse.update({
            where: { id: parseInt(caisseId) },
            data: { soldeActuel: montantMouvement }
        });
        
        return new Response(JSON.stringify(typeof soldeActuel), { status: 201 });
    } catch (error) {
        return new Response("mouvementCaisse Not Found", { status: 201 });   
    }
}

export async function DELETE (req: Request, { params }: RouteParams ) {
    const { mouvementId } = await params;

    try {
        await prisma.mouvementCaisse.delete({
            where: {
                id: parseInt(mouvementId, 10)
            }
        });    

        return new Response("mouvementCaisse Removed", { status: 200 }); 

    } catch (error) {
        return new Response(JSON.stringify({ error: "mouvementCaisse Not found" }), { status: 404 });
    } 
}

