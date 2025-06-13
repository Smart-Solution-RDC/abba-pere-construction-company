import { Pagination } from "@/prisma/utils";
import { NextRequest } from "next/server"; 

export async function GET(request: NextRequest) {

    const requestParams = request.nextUrl.searchParams;
    const search = requestParams.get('search');

    const condition = search ? {
        OR: [{ nom_complet: search ? { contains: search, mode: 'insensitive' } : undefined }] 
    } : {}

    const selection = {
        nom_complet: true,
        email: true
    }

    const data = await Pagination(request, 'agent', condition, selection, null);

    return new Response(JSON.stringify(data), { status: 200 }); 
}



