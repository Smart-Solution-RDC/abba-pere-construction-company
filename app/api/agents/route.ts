import { prisma } from "@/lib/prisma";
import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server"; 

export async function GET(request: NextRequest) {

    const requestParams = request.nextUrl.searchParams;
    const search = requestParams.get('search'); 
    const notWithPagination = requestParams.get('notWithPagination'); 

    if (notWithPagination) {
        const agents = await prisma.agent.findMany({
            select: {
                id: true,
                nom_complet: true
            }
        });

        return new Response(JSON.stringify(agents), { status: 201 });
    }

    const condition = search ? {
        OR: [{ nom_complet: search ? { contains: search, mode: 'insensitive' } : undefined }] 
    } : {}

    const selection = {
        id: true,
        nom_complet: true,
        email: true,
        role: true,
        poste: true,
        sexe: true
    }

    const data = await Pagination(request, 'agent', condition, selection, null);

    return new Response(JSON.stringify(data), { status: 200 }); 
}



