import { prisma } from "@/lib/prisma";
import { PanierParams } from "@/prisma/definitions";
import { CreateMouvementCaisse, UpdateCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest, { params }: PanierParams) {
    const { panierId } = await params;

    const data = await req.json();
    // data.type_mouvement = 'SORTIE'
    let total_ttc = 0;
    let total_ht = 0;
    
    let nom_complet = data.nouveau_client && data.nouveau_client.nom + ' ' + data.nouveau_client.postnom
    
    try {
        if (panierId) {    
            const panier = await prisma.panier.findUnique({
                where: { 
                    id: parseInt(panierId, 10),
                    // statut: "en_cours"
                }
            });

            if (!panier) return new Response("Panier not found", { status: 404 });

            const detail_panier = await prisma.detailPanier.findMany({
                where: { panierId: panier.id },
                select: {
                    produitId: true,
                    qtte: true,
                    prixTotal: true
                }
            });

            for (let i = 0; i < detail_panier.length; i++) {
                total_ht += detail_panier[i].prixTotal;
            }

            total_ttc = (total_ht) * 0.16; // Pour une taxe de 16%

            const paiement = await prisma.paiement.create({
                data: {
                    montant: total_ht,
                    deviseId: parseInt(data.deviseId),
                    moyen_paiement: data.moyen_paiement,
                    caisseId: 1
                }
            });

            const vente = await prisma.vente.create({
                data: {
                    panierId: 1,
                    type_acheteur: 'ordinaire',
                    total_ttc: 33,
                    total_ht: 33,
                    paiementId: paiement.id,
                    fournisseurId: data.fournisseurId ? parseInt(data.fournisseurId) : null,
                    clientId: data.clientId ? parseInt(data.clientId) : null,
                    agentId: data.agentId ? parseInt(data.agentId) : null, 
                    enregistrerParId: 1
                }
            });

            const produits = await prisma.produit.updateMany({
                where: { id: { in: detail_panier.map(item => item.produitId) }},
                data: { qtte: { decrement: detail_panier.find(item => item.produitId === item.produitId)?.qtte || 0 } }
            });

            if (data.type_acheteur === 'nouveau') {
                const user = await prisma.utilisateur.create({
                    data: {
                        nom: data.nouveau_client.nom,
                        postnom: data.nouveau_client.postnom,
                        nom_complet: nom_complet,
                        email: data.nouveau_client.email
                    }
                });

                const contact = await prisma.contact.create({
                    data: {
                        tel: data.nouveau_client.tel,
                        utilisateurId: 1
                    }
                });
            }

            UpdateCaisse(total_ht, data);
            CreateMouvementCaisse(total_ht, data);

            return new Response("Vente Successed!", { status : 201 });
        }
    } catch (error) {
        return new Response("Invalid Form", { status : 201 });        
    }    
} 

 