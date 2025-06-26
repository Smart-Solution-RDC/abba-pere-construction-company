import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";


export async function GET (request: NextRequest) {
    try {
        const depenses = await prisma.depense.findMany({
            // where: {},
            select: {
                id: true,
                referenceExterne: true,
                motif: true,
                Paiement: {
                    select: {
                        montant: true,
                        devise: {
                            select: {
                                symbole: true
                            }
                        },
                        modePaiement: {
                            select: {
                                type: true
                            }
                        }
                    }
                }
            }
    });
        return new Response(JSON.stringify(depenses), { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 201 });
    }    
}