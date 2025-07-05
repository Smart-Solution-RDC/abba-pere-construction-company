import { Devise } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { DeviseRouteParams } from "@/prisma/definitions";


export async function GET(request: Request, { params }: DeviseRouteParams) {
    const { deviseId } = await params;
    const data: Devise = await request.json();

    const devise = await prisma.devise.findUnique({
        where: { id: parseInt(deviseId)}
    });

    if (!devise) return new Response(JSON.stringify({error: "Devise Not Found!"}), { status: 404 });

    try {
        await prisma.devise.update({
            where: { id: parseInt(deviseId) },
            data: data
        });
        return new Response(JSON.stringify({message: "Devise Updated!"}), { status: 404 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Formulaire Invalide"}), { status: 201 });
    }
} 