import { prisma } from "@/lib/prisma";
import { DeviseParams } from "@/prisma/definitions";


export async function PUT(req: Request, { params }: DeviseParams) {
    const { deviseId } = await params;
    const data = await req.json();

    const devise = await prisma.devise.findUnique({
        where: { id: parseInt(deviseId)}
    });

    if (!devise) return new Response("Devise Not Found!", { status: 404 });

    try {
        await prisma.devise.update({
            where: { id: parseInt(deviseId) },
            data: data
        });
        return new Response("Devise Updated!", { status: 404 });
    } catch (error) {
        return new Response("Invalid Form!", { status: 404 });   
    }
} 