import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET (request: NextRequest) {
    
    // La bare des recherches
    // La pagination

    const FetchParams = request.nextUrl.searchParams;
    const dateCloture = FetchParams.get('date');

    const day = dateCloture ? new Date(dateCloture) : new Date();
    
    const startDayUTC = new Date(
        Date.UTC(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        0, 0, 0, 0 // Heure, minute, seconde, milliseconde
        )
    );

    const endDayUTC = new Date(
        Date.UTC(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        23, 59, 59, 999 // Heure, minute, seconde, milliseconde
        )
    ); 


    const SearchParams = request.nextUrl.searchParams;
    // const page = SearchParams.get('page') || 1; 
    // const limit = SearchParams.get('limit') || 10; 

    const page = 1
    const limit = 10

    const skip = (page - 1) * limit; 

    const produits = await prisma.clotureCaisse.count();
    const totalPages = Math.ceil(produits / limit);
    
    const clotureCaisse = await prisma.clotureCaisse.findMany({
        // where: {
        //     updatedAt: {
        //         gte: startDayUTC,
        //         lte: endDayUTC
        //     }
        // },
        // select: {
        //     dateCloture: true,
        //     // notes: true,
        // }
        skip: skip,
        take: limit,
        orderBy: {
            createdAt: 'desc', 
        },
    });

    return new Response(JSON.stringify({
        data: clotureCaisse,
        meta: {
            currentPage: page,
            limit: limit,
            totalItems: clotureCaisse,
            totalPages: totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    }), { status: 201 });
}

