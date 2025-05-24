import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const { name, email } = await request.json();
    
    const data = await prisma.utilisateur.create({
        data: { name, email }
    });    

    return new Response(JSON.stringify(data), {
        status: 200
    });
}