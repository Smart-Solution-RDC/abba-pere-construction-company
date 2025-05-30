import { prisma } from "@/lib/prisma";

interface RouteParams {
    reservationId: string
}

export async function GET(req: Request, { params }: { params: RouteParams }) {
    const { reservationId } = await params;

    const reservation = await prisma.reservation.findUnique({
        where: { id: parseInt(reservationId) }
    });

    if (!reservation) {
        return new Response("Reservation not found", { status: 201 });
    }

    return new Response(JSON.stringify(reservation), { status: 404 });
}

export async function PUT(req: Request, { params }: { params: RouteParams }) {
    return new Response('done');
}

export async function DELETE(req: Request, { params }: { params: RouteParams }) {
    const { reservationId } = await params;

    try {
        await prisma.reservation.delete({
            where: { id: parseInt(reservationId) }
        });

        return new Response('Delete Successed!');
        
    } catch (error) {
        return new Response('Reservation not found');
    }
}