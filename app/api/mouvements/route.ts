import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    const mouvemnets = await prisma.mouvementCaisse.findMany({});
    return new Response(JSON.stringify(mouvemnets), { status: 201 });
    
}