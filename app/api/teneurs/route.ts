import { prisma } from "@/lib/prisma";
import { TeneurParams } from "@/prisma/definitions";

export async function GET(req: Request, { params }: { params: TeneurParams}) {
    const teneurs = await prisma.teneur.findMany({});
    return new Response(JSON.stringify(teneurs), { status: 200 });
}




