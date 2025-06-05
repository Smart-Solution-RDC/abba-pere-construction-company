import { prisma } from "@/lib/prisma";


export async function GET (req: Request) {
    const caisses = await prisma.caisse.findMany({});
    return new Response(JSON.stringify(caisses), { status: 201 });
}



