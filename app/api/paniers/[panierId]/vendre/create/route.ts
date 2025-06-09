import { prisma } from "@/lib/prisma";
import { ClotureCaisseValid, PanierParams } from "@/prisma/definitions";
import { checkTable, CreateMouvementCaisse, UpdateCaisse, VerifyClotureCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest, { params }: PanierParams) {
    const { panierId } = await params;

    const data = await req.json();
    data.categorie = 'VENTE'
    let total_ttc = 0;
    let total_ht = 0;
    
    let nom_complet = data.nouveau_client && data.nouveau_client.nom + ' ' + data.nouveau_client.postnom
    
    try {
        if (panierId) {
            const panier = await checkTable('panier', panierId);

            if (!panier) new Response("Panier Not Found!", { status: 404 });

            const detail_panier = await prisma.detailPanier.findMany({
                where: { panierId: panier?.id },
                select: {
                    produitId: true,
                    qtte: true,
                    prixTotal: true
                }
            });

            for (let i = 0; i < detail_panier.length; i++) {
                total_ht += detail_panier[i].prixTotal;
            }

            total_ttc = (total_ht) * 0.16; // Le TVA est de 16%
            

            const produits = await prisma.produit.updateMany({
                where: { id: { in: detail_panier.map(item => item.produitId) }},
                data: { qtte: { decrement: detail_panier.find(item => item.produitId === item.produitId)?.qtte || 0 } },
            });

            const getProtuis = await prisma.produit.findMany({
                where: { id: { in: detail_panier.map(item => item.produitId)}},
                select: { id: true, qtte: true }
            });

            // Verift and create a cloture caisse...
            const clotureCaisse = await VerifyClotureCaisse(data.enregistrerParId);

            const paiement = await prisma.paiement.create({
                data: {
                    montant: total_ht,
                    deviseId: parseInt(data.deviseId),
                    moyen_paiement: data.moyen_paiement,
                    caisseId: parseInt(data.caisseId)
                }
            });

            const vente = await prisma.vente.create({
                data: {
                    panierId: parseInt(panierId),
                    type_acheteur: data.type_acheteur,
                    total_ttc: total_ttc,
                    total_ht: total_ht,
                    paiementId: paiement.id,
                    fournisseurId: data.fournisseurId ? parseInt(data.fournisseurId) : null,
                    clientId: data.clientId ? parseInt(data.clientId) : null,
                    agentId: data.agentId ? parseInt(data.agentId) : null, 
                    enregistrerParId: parseInt(data.enregistrerParId)
                }
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
            CreateMouvementCaisse(total_ht, vente.id, data);

            return new Response("Vente Created!", { status : 201 });
        }
    } catch (error) {
        return new Response("Invalid Form", { status : 201 });        
    }    
} 

 