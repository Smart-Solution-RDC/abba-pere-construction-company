import { DetailPanierForm, Fournisseur, PaiementData } from "@/prisma/defs-front";


const api = 'http://localhost:3000/api/'

export async function createAchat (panierId: number, detailsPanier: DetailPanierForm[], paiement: PaiementData) {
        
    const details = detailsPanier.map(({ id, devise, designation, produit, modePaiementId, typeProduit, teneur, ...rest }) => rest);

    try {
        const res = await fetch (`${api}agents/1/paniers/${panierId}/acheter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                detailsPanier: details,
                paiement: paiement
            })
        });

        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);        
    }    
}

export async function findUniqueAchat(id: string | null) {
    const achatId = parseInt(id as string, 10);
    try {
        const res = await fetch (`${api}agents/1/achats/${achatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let datas = await res.json();
        return datas;
    } catch (error) {
        console.log(error);        
    }    
}   