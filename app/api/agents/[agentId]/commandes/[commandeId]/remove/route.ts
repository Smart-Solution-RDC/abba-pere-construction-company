import { NextRequest } from "next/server";

interface RouteParams {
    params : {
        commandeId: string
    }
}

export async function DELETE (request: NextRequest, { params }: RouteParams ) {
    
    return new Response("")
}