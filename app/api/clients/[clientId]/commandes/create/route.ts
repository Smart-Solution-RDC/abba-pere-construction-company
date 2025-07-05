import { prisma } from "@/lib/prisma";
import { Commande } from "@/prisma/utils";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server"

interface RouteParams {
    params: {
        clientId: string,
        panierId: string
    }
}

export async function POST(request: NextRequest, { params }: RouteParams ) {
    const form = await request.json();
    const { clientId, panierId } = await params;

    for (let i = 0; i < form.details.length; i++) {
        let detail = form.details[i];
        detail.prixTotalTTC = detail.prixTotalHT * 0.16;
    }

    try {
        await prisma.detailPanier.createMany({
            data: form.details
        });

        let acheteurTiersId: number | null = null;
        if (form.acheteurTiers) {
            const create = await prisma.acheteurTiers.create({ data: {
                nom: form.acheteurTiers.nom,
                postnom: form.acheteurTiers.postnom,
                tel: form.acheteurTiers.tel
            }});
            acheteurTiersId = create.id;
        }

        const commande = await Commande(
            parseInt(clientId), parseInt(form.panierId),
            form.datas, form.notes, form.estReserve, 
            acheteurTiersId
        );
        
        await prisma.panier.update({ where: {id: parseInt(form.panierId)}, data: { statut: 'VALIDE' } }); 
        
        return new NextResponse(JSON.stringify({
            message: "La commande a été enregistré",
            data: commande.id
        }), { status: 201 });

    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Formulaire Invalide"
        }), { status: 201 });        
    }
    
}