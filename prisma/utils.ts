import { prisma } from "@/lib/prisma";
import { tableType } from "./definitions";

export async function checkTable(req: Request, tableName: tableType, tableId: string) {
    const table = await prisma[tableName].findFirst({
        where: { id: parseInt(tableId) }
    });
    return table;
} 

export function updateCaisseMouvement (type_mouvement: string, soldeActuel: number, montant: number) {
    
    let montantMouvement = 0;
    if (type_mouvement == 'ENTREE') {
        montantMouvement = soldeActuel + montant;
    } else {
        montantMouvement = soldeActuel - montant;
    }

    return montantMouvement;
}

