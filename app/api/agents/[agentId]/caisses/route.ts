import { prisma } from "@/lib/prisma";

interface RouteParams {
    params: {
        caisseId: string
    }
}

export async function GET (request: Request, {params}: RouteParams) {
    
    const caisses = await prisma.caisse.findMany({
        select: {
            id: true,
            nom: true,
            devise: {
                select: {
                    code: true,
                    symbole: true
                }
            },
            ModePaiement: {
                select: {
                    type: true,
                    soldeActuel: true,
                    caisseId: true
                }
            }
        }
    });

    let montant = 0;  
    let datas = [];
    for (let i = 0; i < caisses.length; i++) {
        const caisse = caisses[i];
        for (let j = 0; j < caisse.ModePaiement.length; j++) {
            const mode = caisse.ModePaiement[j];
            if (caisse.id == mode.caisseId && mode.type == 'BANQUE') {
                montant += mode.soldeActuel ?? 0
            }
            
        }
        datas.push({
            id: caisse.id,
            montant: montant
        });
    }

    return new Response(JSON.stringify(datas), { status: 201 });
}



