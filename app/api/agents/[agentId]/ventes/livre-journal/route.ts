import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const datas = await prisma.paiement.groupBy({
        // createdAt", 'modePaiement', 'achatId', 'venteId', 'commandeId'
        by: ['createdAt', 'achatId', "venteId"],
        _sum: {
            montant: true
        },
        orderBy: {
            createdAt: 'asc'
        }
    });

    // const days = datas.reduce((acc: any, curr: any) => {
    //     const date = new Date(curr.createdAt);
    //     const day = date.toISOString().split('T')[0];
    //     const modePaiement = curr.modePaiement;
    //     const key = `${day}_${modePaiement}`;
    //     if (!acc[key]) { 
    //         acc[key] = { day, modePaiement, totalHT: 0 };
    //         acc[key].achatId = curr.achatId;
    //         acc[key].venteId = curr.venteId;
    //         acc[key].commandeId = curr.commandeId;
    //     }
    //     acc[key].totalHT += curr._sum.totalHT ?? 0;
    //     return acc;
    // }, {});

    // const groupedByDay = Object.values(days);

    // // Group by month
    // const mounth = groupedByDay.reduce((acc: Record<string, { month: string; totalHT: number; items: any[] }>, curr: any) => {
    //     const date = new Date(curr.day); // 'day' is in YYYY-MM-DD format
    //     const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    //     if (!acc[monthKey]) {
    //         acc[monthKey] = { month: monthKey, totalHT: 0, items: [] };
    //     }
    //     acc[monthKey].totalHT += curr.totalHT ?? 0;
    //     acc[monthKey].items.push(curr);
    //     return acc;
    // }, {} as Record<string, { month: string; totalHT: number; items: any[] }>);

    // const groupedByMonth = Object.values(mounth);

    return new Response(JSON.stringify(datas), { status: 201 });        
}






