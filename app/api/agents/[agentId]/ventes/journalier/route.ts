import { prisma } from "@/lib/prisma";
import { Pagination } from "@/prisma/utils";
import { endOfDay, startOfDay } from "date-fns";
import { NextRequest } from "next/server";


interface RouteParams {
    params: {
        agentId: string;
    }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const searchParams = new URL(request.url).searchParams;
    const searchDate = searchParams.get('date');
    const pg = searchParams.get('page') || 1; 
    const lmt = searchParams.get('limit') || 10; 

    const { agentId } = await params;

    const agent = await prisma.agent.findUnique({
        where: { id: parseInt(agentId) },
    });

    if (!agent) return new Response(JSON.stringify({error: "Agent Is Not Found"}), { status: 404 });
    
    const date = searchDate && new Date(searchDate);
    let startDayUTC: Date | undefined = undefined;
    let endDayUTC: Date | undefined = undefined;
    if (date) {
        startDayUTC = new Date(
            Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                0, 0, 0, 0 // Heure, minute, seconde, milliseconde
            )
        );

        endDayUTC = new Date(
            Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                23, 59, 59, 999 // Heure, minute, seconde, milliseconde
            )
        );
    }

    const page = typeof pg == 'string' ? parseInt(pg) : pg;
    const limit = typeof lmt == 'string' ? parseInt(lmt) : lmt;
    const skip = (page - 1) * limit;

    const countTableContent = await prisma.vente.count();
    const totalPages = Math.ceil(countTableContent / limit);

    const ventes = await prisma.vente.groupBy({
        where: {
            enregistrerPar: agent?.nom_complet,
            ...(date ? {
                createdAt: {
                    gte: startDayUTC,
                    lte: endDayUTC
                }
            } : {})
        },
        by: ['createdAt'],
        // _count: { id: true },
        skip: skip,
        // take: limit
    });

    function formatDate(date: Date | string) {
        const d = date instanceof Date ? date : new Date(date);
        return {
            jour: d.getDate(),
            mois: d.getMonth() + 1,
            annee: d.getFullYear(),
            heure: d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        };
    }

    const rapportResponse = ventes
        ? ventes.map((vente) => ({
            ...vente,
            createdAt: `${formatDate(vente.createdAt).jour}/${formatDate(vente.createdAt).mois}/${formatDate(vente.createdAt).annee}`,
        }))
        : null;

    return new Response(JSON.stringify({
        data: rapportResponse,
        meta: {
            currentPage: page,
            limit: limit,
            totalItems: countTableContent,
            totalPages: totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        }
    }), { status: 201 });
}









