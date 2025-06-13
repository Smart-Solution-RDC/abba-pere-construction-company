import { prisma } from "@/lib/prisma";
import { PanierParams, TypeAcheteur } from "@/prisma/definitions";
import { checkTable, CreateMouvementCaisse, getNomComplet, UpdateCaisse, VerifyClotureCaisse } from "@/prisma/utils";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest, { params }: PanierParams) {
    const { panierId } = await params;

    const data = await request.json();

    data.categorie = 'VENTE'
    let totalTTC = 0;
    let totalHT = 0;
    
    try {
        if (panierId) {
            const panier = await checkTable('panier', panierId);

            if (!panier) return new Response("Panier Not Found!", { status: 404 });

            const detail_panier = await prisma.detailPanier.findMany({
                where: { panierId: panier?.id },
                select: {
                    produitId: true,
                    qtte: true,
                    prixTotalHT: true
                }
            });

            const getProduits = await prisma.produit.findMany({
                where: { id: { in: detail_panier.map(item => item.produitId)}},
                select: { id: true, qtteDisponible: true, designation: true }
            });

            for (let i = 0; i < detail_panier.length; i++) {
                totalHT += detail_panier[i].prixTotalHT;
                if (detail_panier[i].qtte > getProduits[i].qtteDisponible) {
                    return new Response(`Produit ${getProduits[i].designation} n'est pas disponible`, { status: 404 });
                }
            }

            totalTTC = (totalHT) * 0.16; // Le TVA est de 16%

            const produits = await prisma.produit.updateMany({
                where: { id: { in: detail_panier.map(item => item.produitId) }},
                data: { qtteDisponible: { decrement: detail_panier.find(item => item.produitId === item.produitId)?.qtte || 0 } },
            });

            UpdateCaisse(request, totalHT, data);

            const paiement = await prisma.paiement.create({
                data: {
                    montant: totalHT,
                    deviseId: parseInt(data.deviseId),
                    modePaiement: data.modePaiement,
                    caisseId: parseInt(data.caisseId)
                }
            });

            let nouveauClient = null
            if (data.typeAcheteur === 'NOUVEAU') {
                nouveauClient = await prisma.client.create({
                    data: {
                        nom: data.form.nom,
                        postnom: data.form.postnom ? data.form.postnom : null,
                        nom_complet: getNomComplet(data.form),
                        email: data.form.email
                    }
                });

                if (data.form.tel) {
                    await prisma.contact.create({
                        data: {
                            tel: data.form.tel,
                            clientId: nouveauClient.id
                        }
                    });
                }

                if (data.form.adresse) {
                    await prisma.adresse.create({
                        data: {
                            ville: 'Put in into optional Field',
                            adresse: data.form.adresse,
                            clientId: nouveauClient.id
                        }
                    });
                }
            }

            const vente = await prisma.vente.create({
                data: {
                    panierId: parseInt(panierId),
                    typeAcheteur: data.typeAcheteur,
                    totalTTC: totalTTC,
                    totalHT: totalHT,
                    paiementId: paiement.id,
                    fournisseurId: data.fournisseurId && data.typeAcheteur == 'FOURNISSEUR' ? parseInt(data.fournisseurId) : null,
                    clientId: data.clientId && data.typeAcheteur == 'CLIENT' ? parseInt(data.clientId) : nouveauClient ? nouveauClient?.id : null,
                    agentId: parseInt(data.agentId)
                    // add creeParId* attr. table
                }
            });

            // // Verift and create a cloture caisse...
            // const clotureCaisse = await VerifyClotureCaisse(data.enregistrerParId);

            // CreateMouvementCaisse(totalHT, vente.id, data);

            return new Response("Vente Successed!", { status : 201 });
        }
    } catch (error) {
        return new Response("Invalid Form", { status : 201 });        
    }    
} 

 