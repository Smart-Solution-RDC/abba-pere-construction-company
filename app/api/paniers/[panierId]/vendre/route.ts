import { PanierParams } from "@/prisma/definitions";

export async function GET(req: Request, { params }: PanierParams) {
    const { panierId } = await params;

    return new Response('get panier data and detail panier');
}

