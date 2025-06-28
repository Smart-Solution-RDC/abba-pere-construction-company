import { prisma } from "@/lib/prisma";
import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server";

export async function GET (request: NextRequest) {
    
    const requestParams = request.nextUrl.searchParams;
    const search = requestParams.get('search');

    const notWithPagination = requestParams.get('notWithPagination'); 
    
    if (notWithPagination) {
        const clients = await prisma.client.findMany({
                select: {
                    id: true,
                    nom_complet: true
                }
            });
        return new Response(JSON.stringify(clients), { status: 201 });
    }

    const condition = search ? {
        OR: [{ nom_complet: search ? { contains: search, mode: 'insensitive' } : undefined }] 
    } : {}

    const selection = {
        id: true,
        nom: true,
        postnom: true,
        picture: true,
        nom_complet: true,
        email: true,
        adresses: {
            select: {
                ville: true,
                adresse: true
            }
        }
    }

    const clients = await Pagination(request, 'client', condition, selection, null);

    return new Response(JSON.stringify(clients), { status: 201 });
}

