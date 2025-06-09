import { prisma } from "@/lib/prisma";
import { AchatRouteParams, ClotureCaisseValid, tableType, TypeMouvement } from "./definitions";


export async function checkTable(tableName: tableType, tableId: string) {
    const table = await prisma[tableName].findFirst({
        where: { id: parseInt(tableId) },
        // select: {}
    });
    
    // if (!table) return new Response(`${tableName} Not Found`, { status: 201 });

    return table;
} 

export function updateCaisseMouvement (type_mouvement: TypeMouvement, soldeActuel: number, montant: number) {
    
    let montantMouvement = 0;
    if (type_mouvement === 'ENTREE') {
        montantMouvement = soldeActuel - montant;
    } else {
        montantMouvement = soldeActuel + montant;
    }

    return montantMouvement;
}


export async function UpdateCaisse(total_ht: number, data: AchatRouteParams) {
    const caisse = await prisma.caisse.findUnique({
        where: { id: parseInt(data.caisseId) }
    });

    if(!caisse) return new Response("Caisse not Found", { status: 404 });
    // // if(caisse.soldeActuel < montant) return new Response("Solde Insuffisant!", { status: 201 });
    
    let montantMouvement = updateCaisseMouvement(data.type_mouvement, caisse.soldeActuel, total_ht);
    
    const updateCaisse = await prisma.caisse.update({
        where: { id: parseInt(data.caisseId) },
        data: { soldeActuel: montantMouvement }
    }); 
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






















