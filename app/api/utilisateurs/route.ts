import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server"; 

export async function GET(req: NextRequest) {
    // Create a pagination render, in util*

    const requestParams = req.nextUrl.searchParams;
    const search = requestParams.get('search');
    // const role = requestParams.get('role');
    // const poste = requestParams.get('poste');
    
    const users = await prisma.utilisateur.findMany(search ? {
        where: { OR: [{ nom_complet: search ? { contains: search, mode: 'insensitive' } : undefined }] }
    } : {});

    return new Response(JSON.stringify(users), { status: 200 }); 
}



