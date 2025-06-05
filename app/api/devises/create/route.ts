import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const data = await req.json();

    try {
        const devise = await prisma.devise.create({
            data: data
        })
        return new Response("Devise created!", { status: 200 });
    } catch (error) {
        return new Response("Invalid Form", { status: 404 });
    }
        
}

 