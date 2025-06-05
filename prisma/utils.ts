import { prisma } from "@/lib/prisma";
import { AchatRouteParams, tableType, TypeMouvement } from "./definitions";


export async function checkTable(req: Request, tableName: tableType, tableId: string) {
    const table = await prisma[tableName].findFirst({
        where: { id: parseInt(tableId) }
    });
    return table;
} 

// async function checkTable (table: TableType, tableId: string) {
//     const myTable = await prisma[table].findUnique({
//         where: { id: parseInt(tableId) },
//     });

//     if (!myTable) return new Response(`${table} Not Found`, { status: 201 });

//     return myTable;
// }

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
    const caisse = await prisma.caisse.findFirst({
        where: { id: parseInt(data.caisseId) }
    });

    if(!caisse) return new Response("Caisse not Found", { status: 201 });
    // // if(caisse.soldeActuel < montant) return new Response("Solde Insuffisant!", { status: 201 });
    
    let montantMouvement = updateCaisseMouvement(data.type_mouvement, caisse.soldeActuel, total_ht);
    
    const updateCaisse = await prisma.caisse.update({
        where: { id: parseInt(data.caisseId) },
        data: { soldeActuel: montantMouvement }
    }); 
}

export async function CreateMouvementCaisse(total_ht: number, data: AchatRouteParams) {
    let default_description = data.type_mouvement == 'ENTREE' ? "Achat" : "Vente"
    const mouvementCaisse = await prisma.mouvementCaisse.create({
        data: {
            caisseId: parseInt(data.caisseId),
            type_mouvement: data.type_mouvement,
            montant: total_ht,
            enregistrerParId: parseInt(data.enregistrerParId),
            // Si cette valeur est nulle, affichez ID*
            referenceExterne: data.referenceExterne ? data.referenceExterne : null,
            description: data.description ? data.description : `${default_description} des produits`
        }
    });
}

