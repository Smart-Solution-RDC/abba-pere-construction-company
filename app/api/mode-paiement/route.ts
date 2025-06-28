import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

// interface RouteParams {
//     params: { deviseId: string }
// }

export async function GET (request: NextRequest) {
    // const { deviseId } = await params;

    const modePaiement = await prisma.modePaiement.findMany({
        where: {},
        select: {
            id: true,
            type: true,
            caisse: {
                select: {
                    deviseId: true
                }
            }
        }
        // caisse: { deviseId: parseInt( deviseId ) }
    });

    return new Response(JSON.stringify(modePaiement), { status: 201 });
}



 