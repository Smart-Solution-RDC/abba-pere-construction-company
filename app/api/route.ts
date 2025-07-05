import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET (req: Request) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return NextResponse.json({error: 'Not autorized'}, { status: 404})
    }

    if (session.user?.email) {
        const findClient = await prisma.client.findUnique({
            where: { email: session.user?.email },
        });

        if (!findClient) {
            if (session.user?.name !== null && session.user?.name !== undefined) {
                await prisma.client.create({ data: {
                    nom: session.user?.name,
                    nom_complet: session.user.name,
                    email: session.user.email,
                    picture: session.user.image
                }});
            }
            return new Response(JSON.stringify({
                message: "Le client a été ajouté !"
            }), { status: 201 });
        }
    
        return new Response(JSON.stringify({
            message: "Le client existe !"
        }), { status: 201 });
    }
}