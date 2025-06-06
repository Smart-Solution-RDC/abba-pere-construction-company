import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET (req: NextRequest) {
    const search_params = req.nextUrl.searchParams;
    const date_cloture = search_params.get('date_cloture');
    const date = new Date();

    const clotures = await prisma.clotureCaisse.findMany();
    return new Response (JSON.stringify(clotures), { status: 201 });
}

