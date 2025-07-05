import { Fournisseur, TypeProduit } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { AgentRouteParams } from "../../../../../../prisma/definitions";

export async function POST(request: NextRequest, { params }: AgentRouteParams) {
    const data = await request.json();
    const { agentId } = await params;

    try {        
        const fournisseur = await prisma.fournisseur.create({
            data: {
                nom: data.nom,
                email: data. email,
                typeProduit: data.typeProduit,
                autresType: data.autresType !== '' ? data.autresType : null,
                agentId: parseInt(agentId)
            }
        });

        await prisma.contact.create({
            data: {
                tel: data.tel,
                fournisseurId: fournisseur.id
            }
        });

        await prisma.adresse.create({
            data: {
                adresse: data.adresse,
                fournisseurId: fournisseur.id
            }
        });

        let dataReturned = {
            id: fournisseur.id,
            nom: fournisseur.nom,
            typeProduit: fournisseur.typeProduit,
            autreType: data.autresType !== '' ? data.autresType : null,
            contacts: [{ tel: data.tel }],
            adresses: [{ adresse: data.adresse }]
        }        
        
        return new Response(JSON.stringify({
            message: "Le fournisseur enregistré avec succès!",
            data: dataReturned
        }), { status: 201 });
        
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });
    }
}

