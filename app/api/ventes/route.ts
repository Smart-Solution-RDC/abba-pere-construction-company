import { prisma } from "@/lib/prisma";


export async function GET(req: Request) {

    const ventes = await prisma.vente.findMany({});

    return new Response(JSON.stringify(ventes), { status: 201 });
}


 