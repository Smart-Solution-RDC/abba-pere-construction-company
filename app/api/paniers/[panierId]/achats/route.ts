import { prisma } from "@/lib/prisma";
interface RouteParams {
    panierId: string
}

export async function GET(req: Request, { params }: { params: RouteParams}) {
    try {    
        const get_achat = await prisma.panier.findMany({
            select: {
                id: true,
                utilisateurId: true,
                DetailAchat: {
                    select: {
                        produitId: true,
                        qtte: true,
                        prixUnitaire: true,
                        prixTotal: true,
                    }
                }
            }
        });

        return new Response(JSON.stringify(get_achat), { status: 200 });
    } catch (error) {
        return new Response("Panier not found", { status: 200 });
    }    
}


export async function POST(req: Request, { params }: { params: RouteParams}) {
    const { panierId } = await params;
    const data = await req.json();
    let montant = 0;

    try {

        const panier = await prisma.panier.findUnique({
            where: { 
                id: parseInt(panierId, 10),
                // statut: "en_cours"
            }
        });

        if (!panier) {
            return new Response("Panier not found", { status: 404 });
        }

        const detail_panier = await prisma.detailAchat.findMany({
            where: { panierId: parseInt(panierId, 10) },
            select: {
                produitId: true,
                qtte: true,
                prixTotal: true
            }
        });

        for (let i = 0; i < detail_panier.length; i++) {
            montant += detail_panier[i].prixTotal;
        }

        const paiement = await prisma.paiement.create({
            data: {
                montant: montant,
                deviseId: parseInt(data.deviseId, 10),
                moyen_paiement: data.moyen_paiement,
            }
        });

        const achat = await prisma.achat.create({
            data: {
                panierId: parseInt(panierId, 10),
                fournisseurId: parseInt(data.fournisseurId),
                paiementId: paiement.id,
                enregisterParId: data.utilisateurId
            }
        });        

        const produits = await prisma.produit.updateMany({
            where: {
                id: {
                    in: detail_panier.map(item => item.produitId)
                }
            },
            data: {
                qtte: {
                    increment: detail_panier.find(item => item.produitId === item.produitId)?.qtte || 0
                }
            }
        });
        
        // Delete panier's status

        return new Response(JSON.stringify("Achat Successed!"), { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 400 });
    }
}

