import { prisma } from "@/lib/prisma";
import { AchatRouteParams, ModePaiement, ProduitsDisponible, tableType, Type, TypeAcheteur, TypeMouvement } from "./definitions";
import { NextRequest } from "next/server";
import { Client, DetailPanier, ModePaiment, Produit } from "@/app/generated/prisma";

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

export async function PrixUnitaireSystem(produitId: number, prixUnitaire: number) {
    const produit = await prisma.produit.findUnique({
        where: {id: produitId},
        select: {prixUnitaire: true}
    });
    return produit ? produit.prixUnitaire : prixUnitaire;
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

export async function UpdateDetailPanier(detailId: number, form: DetailPanier) {
    return await prisma.detailPanier.update({
        where: { id: detailId },
        data: form,
        select: {qtte: true, produitId: true, panierId: true, prixTotalHT: true, prixTotalTTC: true}
    });
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
    const table = await prisma[tableName].findFirst({
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

export function getNomComplet(nom: string, postnom: string) {
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
    return await prisma[name].findMany({
        where: condition_,
        select: selection_,
        orderBy: orderBy_
    });
}

export async function GetDetailPanier(panierId: number) {
    const orderBy = { id: 'asc' }
    return await FetchMany('detailPanier', {panierId: panierId}, {id: true, produitId: true, qtte: true, prixUnitaire: true, prixTotalHT: true, prixTotalTTC: true, deviseId: true, modePaiement: true}, orderBy) as Array<DetailPanier>;;
}

export async function GetProduit(DetailPanier: DetailPanier[]) {
    return await FetchMany('produit', { id: { in: DetailPanier.map(item => item.produitId) }}, { qtteDisponible: true, designation: true, prixUnitaire: true }, null) as Array<ProduitsDisponible>;
}

type PaiementForm = {
    montant: number
    modePaiement: ModePaiement
    deviseId: number
    caisseId: number
}

export async function CreatePaiement (form: PaiementForm) {
    return await prisma.paiement.create({
        data: {
            montant: form.montant,
            modePaiement: form.modePaiement,
            deviseId: form.deviseId,
            caisseId: form.caisseId
        }
    });
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
    
}

export async function Paiement (DetailPanier: DetailPanier[], achatId: number | null, venteId: number | null, commandeId: number | null) {
    let isUniqueDevise = [];
    let paiementForm = [];
    let prixTotalHT = 0;
    let prixTotalTTC = 0;

    const getCaisses = await FetchMany ('caisse', {deviseId: { in: DetailPanier.map(item => item.deviseId)}}, {id: true, deviseId: true}, null) as Array<{id: number, deviseId: number}>

    for (let i = 0; i < DetailPanier.length; i++) {
        const detail = DetailPanier[i];
        isUniqueDevise.push(detail.deviseId);
        if (isUniqueDevise.includes(detail.deviseId)) {
            prixTotalHT += detail.prixTotalHT;
            prixTotalTTC += detail.prixTotalTTC;
 
            for (let i = 0; i < getCaisses.length; i++) {
                const caisse = getCaisses[i];                

                if (detail.deviseId == caisse.deviseId) {
                    paiementForm.push({
                    deviseId: detail.deviseId,
                    modePaiement: detail.modePaiement,
                    totalHT: prixTotalHT,
                    totalTTC: prixTotalTTC,
                    caisseId: caisse.id,
                    venteId: venteId,
                    achatId: achatId,
                    commandeId: commandeId,
                });
                }
            }
        }
    }

    const paiement = await prisma.paiement.createMany({
        data: paiementForm
    });
    
    return paiement;
}

export async function VariationCaisse (DetailPanier: DetailPanier[], achatId: ID, venteId: ID, commandeId: ID) {
    
    if (await isUniqueDeviseForm(DetailPanier)) {
        let montant = 0;
        let deviseId = DetailPanier[0].deviseId;

        const getCaisse = await prisma.caisse.findFirst({
            where: { deviseId: deviseId }, select: { id: true }
        });

        for (let i = 0; i < DetailPanier.length; i++) {
            const detail = DetailPanier[i];
            montant += detail.prixTotalHT
        }

        return await prisma.caisse.update({
            where: { id: getCaisse?.id },
            data: { soldeActuel: { increment: montant }}
        });
    }

    if (!await isUniqueDeviseForm(DetailPanier)) {
        const getCaisses = await FetchMany('caisse', { deviseId: { in: DetailPanier.map(item => item.deviseId)}}, { id: true, nom: true, deviseId: true, soldeActuel: true }, null) as Array<{ id: number, nom: number, deviseId: number, soldeActuel: number}>;

        let variation_caisse: any = null;
        for (let i = 0; i < DetailPanier.length; i++) {
            const detail = DetailPanier[i];
            if (detail.deviseId == getCaisses[i].deviseId) {
                if (getCaisses[i].soldeActuel < detail.prixTotalHT) {
                    return getCaisses[i].nom;
                }
                await prisma.caisse.update({
                    where: { id: getCaisses[i].id },
                    data: { soldeActuel: achatId || commandeId ? { decrement: detail.prixTotalHT } :  { increment: detail.prixTotalHT }}
                });
            }
        }
    }    
}

export async function Vente(DetailPanier: DetailPanier[], agentId: string, data: any, nouveauClient: Client) {

    let agent: any | null = null;
    if (agentId) {
        agent = await prisma.agent.findUnique({
            where: { id: parseInt(agentId) },
            select: { nom: true, postnom: true}
        });
    }

    const vente = await prisma.vente.create({
        data: {
            panierId: parseInt(data.panierId),
            typeAcheteur: data.typeAcheteur,
            fournisseurId: data.fournisseurId && data.typeAcheteur == 'FOURNISSEUR' ? parseInt(data.fournisseurId) : null,
            clientId: data.clientId && data.typeAcheteur == 'CLIENT' ? parseInt(data.clientId) : nouveauClient ? nouveauClient?.id : null,
            agentId: data.agentId && data.typeAcheteur == 'AGENT' ? parseInt(data.agentId) : null,
            enregistrerPar: agent && `${agent?.nom} ${agent?.postnom}`
        }
    });

    return vente;
}









