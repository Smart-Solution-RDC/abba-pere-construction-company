import { prisma } from "@/lib/prisma";
import { PanierParams, TypeMouvement } from "@/prisma/definitions";
import { CreateMouvementCaisse, UpdateCaisse, updateCaisseMouvement } from "@/prisma/utils";

export async function POST(req: Request, { params }: PanierParams) {
    const { panierId } = await params;
    const data = await req.json();
    data.type_mouvement = 'ENTREE';
    data.categorie = 'ACHAT';
    let montant = 0;

    try {
        const panier = await prisma.panier.findUnique({
            where: { 
                id: parseInt(panierId, 10),
                // statut: "en_cours"
            }
        });

        if (!panier) return new Response("Panier not found", { status: 404 });

        const detail_panier = await prisma.detailPanier.findMany({
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
                caisseId: parseInt(data.caisseId)
            }
        });

        const achat = await prisma.achat.create({
            data: {
                panierId: parseInt(panierId, 10),
                fournisseurId: parseInt(data.fournisseurId),
                paiementId: paiement.id,
                enregistrerParId: parseInt(data.enregistrerParId)
            }
        });        

        const produits = await prisma.produit.updateMany({
            where: { id: { in: detail_panier.map(item => item.produitId) } },
            data: { qtte: { increment: detail_panier.find(item => item.produitId === item.produitId)?.qtte || 0 } }
        });
        
        // Diminuer sur la caisse...
        // let default_type_mouvement: TypeMouvement = 'ENTREE'
        
        UpdateCaisse(montant, data);
        CreateMouvementCaisse(montant, achat.id, data);

        return new Response("Achat Successed!", { status: 201 });
    } catch (error) {
        return new Response("Invalid Form", { status: 400 });
    }
} 