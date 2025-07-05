import { prisma } from "@/lib/prisma";
import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server";

interface RouteParams { 
    params: {
        agentId: string
    }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
    const { agentId } = await params;
    const data = await request.json();

    try {
        
        const client = await prisma.client.create({ data: {
            email: data.email,
            nom: data.nom,
            postnom: data.postnom ? data.postnom : '',
            nom_complet: `${data.nom} ${data.postnom ? data.postnom : ''}`
        }});

        await prisma.contact.create({ data: {
            tel: data.tel
        }});

        await prisma.adresse.create({ data: {
            adresse: data.adresse
        }});
        
        let dataReturned = {
            id: client.id,
            email: data.email,
            nom_complet: client.nom_complet,
            contacts: [{tel: data.tel}],
            adresses: [{adresse: data.adresse}]
        }        

        return new Response(JSON.stringify({
            message: "Le client a été créé !",
            data: dataReturned
        }), { status: 201 });   
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });   
    }
}

