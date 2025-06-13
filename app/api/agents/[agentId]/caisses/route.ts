import { prisma } from "@/lib/prisma";


export async function GET (request: Request) {
    const caisses = await prisma.caisse.findMany({});
    return new Response(JSON.stringify(caisses), { status: 201 });
}



