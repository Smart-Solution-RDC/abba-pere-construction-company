import { prisma } from "@/lib/prisma";
import { AchatRouteParams, tableType, Type, TypeAcheteur, TypeMouvement } from "./definitions";
import { NextRequest } from "next/server";
import { Client, DetailPanier } from "@/app/generated/prisma";

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

export async function FindVente(venteId: number) {
    return await prisma.vente.findFirst({
        where: { panierId: venteId },
        select: { id: true, paiementId: true }
    });
}

export async function UpdateDetailPanier(detailId: number, form: DetailPanier) {
    return await prisma.detailPanier.update({
        where: { id: detailId },
        data: form,
        select: {qtte: true, produitId: true, panierId: true, prixTotalHT: true, prixTotalTTC: true}
    });
}

export async function UpdateProduit (produitId:number, type: Type, difference: number) {
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

export async function UpdatePaiement(paiementId: number, type: Type, montant: number) {
    return await prisma.paiement.update({
        where: { id: paiementId },
        data: { montant: type == 'dec' ? { decrement: montant} : { decrement: montant} },
        select: { caisseId: true }
    });
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

export function getNomComplet(form: Client) {
    let nom_complet = ''
    if (form.nom && form.postnom) {
        nom_complet = `${form.nom} ${form.postnom}`
    }

    if (form.nom && !form.postnom) {
        nom_complet = `${form.nom}`
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
            moyen_paiement: data.moyen_paiement,
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



















