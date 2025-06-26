import { prisma } from "@/lib/prisma";
import { AchatRouteParams, ProduitsDisponible, tableType, Type, TypeAcheteur, TypeMouvement } from "./definitions";
import { NextRequest } from "next/server";
import { Agent, Client, DetailPanier, ModePaiement, Produit } from "@/app/generated/prisma";



export const API = 'http://localhost:3000/api/'


export async function Table(req: NextRequest, name: tableType, id: string, selection: object | null) {
    const mySelection = selection ? selection : {}

    let table = await prisma[name].findFirst({
        where: { id: parseInt(id) },
        select: mySelection
    });
    
    if (table) {
        if (typeof table == 'object' && Object.keys(table).length == 0) return new Response(`${name} Not Found`, { status: 201 });
    }

    return table;
} 

export async function PrixUnitaireSystem(produitId: number, prixUnitaire: number | null) {
    if (prixUnitaire) return prixUnitaire;
    const produit = await prisma.produit.findUnique({
        where: { id: produitId },
        select: { prixUnitaire: true }
    });
    if (produit) return produit.prixUnitaire;
}

export async function DefaultModePaiement(modePaiementId: number | null) {
    if (!modePaiementId) {
        const mode = await prisma.modePaiement.findFirst({
            where: { type: 'CACHE' },
            select: { id: true }
        });
        return mode?.id;
    }
    return modePaiementId;
}

export async function GetModePaiement(modePaiement: ModePaiement) {
    return modePaiement;
}

export async function FindVente(venteId: number) {
    // Prisma's select does not support renaming keys directly.
    // You need to rename keys after fetching the data.
    const vente = await prisma.vente.findFirst({
        where: { panierId: venteId },
        select: {
            id: true,
            paiements: {
                select: {
                    id: true
                }
            }
        }
    });

    // Example: Rename 'paiements' to 'payments' in the result
    // if (vente) {
    //     const { paiements, ...rest } = vente;
    //     return { ...rest, payments: paiements };
    // }
    return vente;
}

export async function UpdateDetailPanier (detailId: number, data: DetailPanier) {
    // Verification
    const getDetail = await prisma.detailPanier.findUnique({
        where: { id: detailId }
    });

    // if (!getDetail) {
    //     return await prisma.detailPanier.update({
    //         where: { id: detailId },
    //         data: data,
    //         select: {qtte: true, produitId: true, panierId: true, prixTotalHT: true, prixTotalTTC: true}
    //     });
    // }   

    return "Ce produit existe déjà sur le panier";
}

export async function VariationProduitVente (produitId:number, type: Type, difference: number) {
    await prisma.produit.update({
        where: {id: produitId}, 
        data: {qtteDisponible: type == 'dec' ? { decrement: difference } : { increment: difference }}
    });
}

export async function UpdateVente(venteId: number, type: Type, totalHT: number, totalTTC: number) {
    await prisma.vente.update({
        where: {id: venteId},
        data: {
            totalHT: type == 'dec' ? {decrement: totalHT} : {increment: totalHT},
            totalTTC: type == 'dec' ? {decrement: totalTTC} : {increment: totalTTC}
        }
    });
}

type id = number
export async function RetraitPaiement(vente: any, data: any) {
    let retraitPaiement = null;
    let getPaiement = null;
    let getProduit = null;

    let totalHT = 0;
    let totalTTC = 0;
    getPaiement = await prisma.paiement.findMany({
        where: { id: { in: vente.paiements.map((item: any) => parseInt(item.id)) } },
        select: { id: true, deviseId: true, caisseId: true }
    });
    
    // la conversion
    getProduit = await prisma.produit.findUnique({
        where: { id: data.produitId },
        select: { deviseId: true, devise: {
            select: {
                id: true,
                nom: true,
                tauxDEchange: true
            }
        } }
    });

    totalHT = data.montantRetrait;
    totalTTC = totalHT * 0.16;
    if (getProduit && getPaiement[0]?.deviseId !== getProduit?.deviseId) {
        totalHT = data.montantRetrait * getProduit.devise.tauxDEchange;
        totalTTC = totalHT * 0.16;
    }

    retraitPaiement = await prisma.paiement.updateMany({
        where: { 
            venteId: vente.id,
            id: { in: vente.paiements.map((item: any) => item.id )},
            deviseId: { in: getProduit ? (Array.isArray(getProduit) ? getProduit.map(item => item.deviseId) : [getProduit.deviseId]) : [] },
            caisseId: { in: getPaiement.map(item => item.caisseId )},
            },
        data: { 
            modePaiement: data.modePaiement,
            totalHT: { decrement: totalHT },
            totalTTC: { decrement: totalTTC } 
        },  // select: { deviseId: true, caisseId: true }
    });
    
    return retraitPaiement;
}

export async function UpdateCaisses(caisseId: number, type: Type, montant: number) {
    await prisma.caisse.update({
        where: { id: caisseId },
        data: { soldeActuel: type == 'inc' ? { increment: montant } : { decrement: montant }}
    });
}

export async function checkTable(tableName: tableType, tableId: string) {
    const table = await (prisma as any)[tableName].findFirst({
        where: { id: parseInt(tableId) },
        // select: {}
    });
    
    // if (!table) return new Response(`${tableName} Not Found`, { status: 201 });

    return table;
} 

export function updateCaisseMouvement (type_mouvement: TypeMouvement, soldeActuel: number | null, montant: number) {
    
    let montantMouvement = 0;
    if (soldeActuel) {
        if (type_mouvement === 'ENTREE') {
            montantMouvement = soldeActuel - montant;
        } else {
            montantMouvement = soldeActuel + montant;
        }

        return montantMouvement;
    }
    
}

export function getNomComplet(nom: string, postnom: string | null) {
    let nom_complet = ''
    if (nom && postnom) {
        nom_complet = `${nom} ${postnom}`
    }

    if (nom && !postnom) {
        nom_complet = `${nom}`
    }
    return nom_complet;
}


export async function UpdateCaisse(request: NextRequest, total_ht: number, data: AchatRouteParams) {
    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(data.caisseId) },
        select: { soldeActuel: true }
    });

    if(!caisse) return new Response("Caisse not Found", { status: 404 });
    
    let soldeActuel = caisse.soldeActuel
    if (typeof soldeActuel == 'number') {
        if (soldeActuel < total_ht) return new Response("Solde Disponible Insuffisant!", { status: 201 });

        let montantMouvement = updateCaisseMouvement(data.type_mouvement, soldeActuel, total_ht);
        const updateCaisse = await prisma.caisse.update({
            where: { id: parseInt(data.caisseId) },
            data: { soldeActuel: montantMouvement }
        });
        
        return updateCaisse
    }
}


export async function CreateMouvementCaisse(total_ht: number, referenceExterne: number | null, data: AchatRouteParams) {
    
    let defaultDescription = 
        data.categorie == 'ACHAT' ? `Achat des produits`
            : data.categorie == 'VENTE' ? `Vente des produits`
                : data.categorie == 'COMMANDE' ? `Commande des produits`
                    : data.categorie == 'FOURNITUR' ? `Achat des fourniturs` 
                        : data.categorie == 'LOYER' ? `Paiement de Loyer` 
                            : data.categorie == 'TAXE' ? `Paiement de la taxe` 
                                : `Autres...`;
    

    const mouvementCaisse = await prisma.mouvementCaisse.create({
        data: {
            caisseId: parseInt(data.caisseId),
            type_mouvement: data.type_mouvement,
            modePaiement: data.moyen_paiement,
            categorie: data.categorie,
            montant: total_ht,
            enregistrerParId: parseInt(data.enregistrerParId),
            referenceExterne: `${data.categorie.substring(0, 3)}-${referenceExterne}`,
            description: data.description ? data.description : defaultDescription
        }
    });

    if (data.categorie !== 'ACHAT' && data.categorie !== 'VENTE') {
        await prisma.mouvementCaisse.update({
            where: { id: mouvementCaisse.id },
            data: { referenceExterne: `${data.categorie.substring(0, 3)}-${mouvementCaisse.id}`}
        });
    }

}


export async function VerifyClotureCaisse(enregistrerParId: number) {
    const today = new Date();

    const startTodayUTC = new Date(
        Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0, 0, 0, 0 // Heure, minute, seconde, milliseconde
        )
    );

    const endTodayUTC = new Date(
        Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23, 59, 59, 999 // Heure, minute, seconde, milliseconde
        )
    );

    const clotureCaisse = await prisma.clotureCaisse.findFirst({ // The findUnique fx. required the id*
        where: {
            updatedAt: {
                gte: startTodayUTC,
                lte: endTodayUTC 
            }
        }
    });


    if (!clotureCaisse) {
        // Create a cloture
        const clotureCaisse = await prisma.clotureCaisse.create({
            data: {
                dateCloture : today,
                utilisateurClotureId : enregistrerParId,
                notes: `Cloture du ${today.getDay()} ${today.getMonth()} ${today.getFullYear} à ${today.getHours}:${today.getMinutes}`
            }
        });
    }

    return clotureCaisse;
}

type PageRoute = object | null
export async function Pagination (
    request: NextRequest, 
    tableName: tableType, 
    condition: PageRoute, 
    selection: PageRoute, 
    orderBy: PageRoute
) {

    const SearchParams = request.nextUrl.searchParams;
    const pg = SearchParams.get('page') || 1; 
    const lmt = SearchParams.get('limit') || 10; 
    const search = SearchParams.get('search');

    const page = typeof pg == 'string' ? parseInt(pg) : pg;
    const limit = typeof lmt == 'string' ? parseInt(lmt) : lmt;

    const skip = (page - 1) * limit;

    const my_condition = condition ? condition : {}
    const my_selection = selection ? selection : { id: true }
    const order_by = orderBy ? orderBy : { createdAt: 'desc' }

    const table = await prisma[tableName].findMany({
        where: my_condition,
        select: my_selection,
        skip: skip,
        take: limit,
        orderBy: order_by,
    });

    const countTableContent = await prisma[tableName].count();
    const totalPages = Math.ceil(countTableContent / limit);

    return {
        data: table,
        meta: {
            currentPage: page,
            limit: limit,
            totalItems: countTableContent,
            totalPages: totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        }
    }
}

 export async function FetchMany (name: tableType, condition: object, selection: object | null, orderBy: object | null) {
    const condition_ = condition ? condition : {};
    const selection_ = selection ? selection : {};
    const orderBy_ = orderBy ? orderBy : {};
    return await (prisma as any)[name].findMany({
        where: condition_,
        select: selection_,
        orderBy: orderBy_
    });
}

export async function GetDetailPanier(panierId: number) {
    const orderBy = { id: 'asc' }
    return await FetchMany('detailPanier', {panierId: panierId}, {
        id: true, 
        produitId: true, 
        qtte: true, 
        prixUnitaire: true, 
        prixTotalHT: true, 
        prixTotalTTC: true, 
        deviseId: true, 
        modePaiement: true,
        devise: {
            select: {
                tauxDEchange: true
            }
        }
    }, orderBy);
}

export async function GetProduit(DetailPanier: DetailPanier[]) {
    return await FetchMany('produit', { id: { in: DetailPanier.map(item => item.produitId) }}, { 
        id: true, 
        qtteDisponible: true, 
        designation: true, 
        deviseId: true, 
        prixUnitaire: true, 
        devise: {
            select: {
                // id: true,
                tauxDEchange: true
            }
            // devise: true,
        } 
    }, null) as Array<ProduitsDisponible>;
}

type PaiementForm = {
    montant: number
    modePaiement: ModePaiement
    deviseId: number
    caisseId: number
}

export async function CreatePaiement (data: any) {
    const paiement = await prisma.paiement.create({
        data: {
            deviseId: data.deviseId,
            montant: data.montant,
            caisseId: data.caisseId,
            modePaiementId: data.modePaiementId,
            venteId: data.venteId,
            achatId: data.achatId,
            commandeId: data.commandeId,
        }
    });
    return paiement.montant;
}

async function isUniqueDeviseForm (DetailPanier: DetailPanier[]) {
    return DetailPanier.every(
        (item) => item.deviseId === DetailPanier[0].deviseId
    );
}

type ID = boolean | null

export async function VariationStockage (DetailPanier: DetailPanier[], achatId: ID, venteId: ID, commandeId: ID) {
    let produit: any = null;

    let getProduit = await prisma.produit.findMany({
        where: { id: { in: DetailPanier.map(item => item.produitId) }},
        select: { id: true, designation: true, qtteDisponible: true, deviseId: true }
    });

    for (let i = 0; i < DetailPanier.length; i++) {
        const detail = DetailPanier[i];
        if (detail.produitId == getProduit[i].id) {
            if (detail.qtte > getProduit[i].qtteDisponible) {
                return getProduit[i].designation;
            }
        }
        produit = await prisma.produit.update({
            where: { id: detail.produitId },
            data: { qtteDisponible: achatId ? { increment: detail.qtte } : { decrement: detail.qtte }},
            select: { qtteDisponible: true }
        });
    }

    return true;
    
}


type Type = number | null;

export async function Paiement (DetailPanier: DetailPanier[], data: any, achatId: Type, venteId: Type, commandeId: Type) {
    let paiementForm = [];
    let montant = 0;

    const getCaisse = await prisma.caisse.findFirst({
        where: { deviseId: data.deviseId },
        select: { id: true }
    });

    if (achatId) {
        for (let i = 0; i < DetailPanier.length; i++) {
            const detail = DetailPanier[i];
            montant += detail.prixTotalHT;
        }
        
        if (getCaisse?.id === undefined) throw new Error("Caisse ID is undefined.");

        const paiement = await prisma.paiement.create({
            data: {
                deviseId: data.deviseId,
                montant: montant,
                caisseId: getCaisse.id,
                modePaiementId: data.modePaiementId,
                venteId: venteId,
                achatId: achatId,
                commandeId: commandeId
            }
        });

        return montant;
    }

    for (let i = 0; i < DetailPanier.length; i++) {
        const detail = DetailPanier[i];
        
        if (data.deviseId == detail.deviseId && data.deviseProduit[i].deviseId == detail.deviseId) {
            detail.prixTotalHT = detail.prixUnitaire * detail.qtte;
        } else {
            if (detail.deviseId !== data.deviseId && data.deviseId == data.deviseProduit[i].deviseId) {
                detail.prixTotalHT = (detail.prixTotalHT * detail.qtte) / detail.qtte / data.deviseProduit[i].tauxDEchange;
                if (data.deviseId == data.deviseProduit[i].deviseId) {
                    detail.prixUnitaire = detail.prixUnitaire / data.deviseProduit[i].tauxDEchange;
                }
            } else {
                detail.prixUnitaire = detail.prixUnitaire * data.deviseProduit[i].tauxDEchange;
                if (detail.deviseId !== data.deviseId && data.deviseId !== data.deviseProduit[i].deviseId) {
                    detail.prixTotalHT = detail.prixUnitaire * detail.qtte;
                }
            }
        }
                
        montant += detail.prixTotalHT;
                
        await prisma.detailPanier.update({
            where: { id: detail.id, panierId: data.panierId },
            data: {
                deviseId: data.deviseId,
                prixUnitaire: detail.prixUnitaire,
                prixTotalHT: detail.prixTotalHT,
                prixTotalTTC: detail.prixTotalHT * 0.16,
                modePaiementId: data.modePaiementId
            }
        });
    }

    if (getCaisse?.id === undefined) throw new Error("Caisse ID is undefined.");

    const createPaiement = await prisma.paiement.create({
        data: {
            deviseId: data.deviseId,
            montant: montant,
            caisseId: getCaisse.id,
            modePaiementId: data.modePaiementId,
            venteId: venteId,
            achatId: achatId,
            commandeId: commandeId,
        },
        select: { montant: true }
    });
    
    return montant;
}

interface data {
    deviseId: number;
    modePaiementId: number;
    montant: number
}


export async function GetMontantPanier(DetailPanier: DetailPanier[], data: any) {
    let montant = 0;

    for (let i = 0; i < DetailPanier.length; i++) {
        const detail = DetailPanier[i];
        
        if (data.deviseId == detail.deviseId && data.deviseProduit[i].deviseId == detail.deviseId) {
            detail.prixTotalHT = detail.prixUnitaire * detail.qtte;
        } else {
            if (detail.deviseId !== data.deviseId && data.deviseId == data.deviseProduit[i].deviseId) {
                detail.prixTotalHT = (detail.prixTotalHT * detail.qtte) / detail.qtte / data.deviseProduit[i].tauxDEchange;
                if (data.deviseId == data.deviseProduit[i].deviseId) {
                    detail.prixUnitaire = detail.prixUnitaire / data.deviseProduit[i].tauxDEchange;
                }
            } else {
                detail.prixUnitaire = detail.prixUnitaire * data.deviseProduit[i].tauxDEchange;
                if (detail.deviseId !== data.deviseId && data.deviseId !== data.deviseProduit[i].deviseId) {
                    detail.prixTotalHT = detail.prixUnitaire * detail.qtte;
                }
            }
        }

        // await prisma.detailPanier.update({
        //     where: { id: detail.id, panierId: data.panierId },
        //     data: {
        //         deviseId: data.deviseId,
        //         prixUnitaire: detail.prixUnitaire,
        //         prixTotalHT: detail.prixTotalHT,
        //         prixTotalTTC: detail.prixTotalHT * 0.16,
        //         modePaiementId: data.modePaiementId
        //     }
        // });
        
        montant += detail.prixTotalHT;
    }

    return montant;
}

export async function VerifierSoldeDiponible(modePaiementId: number, deviseId: number, montant: number) {
    
    const getCaisse = await prisma.caisse.findFirst({
        where: { deviseId: deviseId },
        select: { id: true, nom: true }
    });
    
    if (!getCaisse) return { caisse: false }

    const getModePaiement = await prisma.modePaiement.findUnique({
        where: { id: modePaiementId, caisseId: getCaisse.id },
        select: { id: true, type: true, soldeActuel: true }
    });

    if (getModePaiement) {
        if (getModePaiement.soldeActuel) {
            return getModePaiement.soldeActuel >= montant ? { soldeActuel: true } : { soldeActuel: false, nomCaisse: getCaisse.nom, type: getModePaiement.type };
        }
    } else { return { modePaiement: false, nomCaisse: getCaisse.nom } }
}


export async function VariationCaisse (data: any, achatId: ID, venteId: ID, commandeId: ID) {    
    const getModePaiement = await prisma.modePaiement.findUnique({
        where: { id: data.modePaiementId },
        select: { id: true, soldeActuel: true }
    });

    if (achatId) {
        if (getModePaiement?.soldeActuel) {
            if (getModePaiement.soldeActuel > data.montant) {
                const update = await prisma.modePaiement.update({
                    where: { id: data.modePaiementId },
                    data: { soldeActuel: { decrement: data.montant }}
                });
                return true;
            } 
            return false;
        }
    }

    if (venteId || commandeId) {
        const update = await prisma.modePaiement.update({
            where: { id: data.modePaiementId },
            data: { soldeActuel: { increment: data.montant }}
        });
        return true;
    }

}

export async function Vente(agent: Agent, panierId: number, acheteur: any) {

    const vente = await prisma.vente.create({
        data: {
            panierId: panierId,
            nom: acheteur.nom != '' ? acheteur.nom : null,
            tel: acheteur.tel != '' ? acheteur.tel : null,
            dateLivraison: acheteur.dateLivraison != '' ? acheteur.dateLivraison : new Date(),
            adresseLivraison: acheteur.adresseLivraison != '' ? acheteur.adresseLivraison : null,
            fournisseurId: acheteur.fournisseurId ?? null,
            clientId: acheteur.clientId ?? null,
            agentId: acheteur.agentId ?? null,
            enregistrerPar: getNomComplet(agent?.nom, agent?.postnom)
        }
    });

    return vente;
}









