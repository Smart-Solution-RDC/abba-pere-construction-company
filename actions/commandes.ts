import { DetailPanier } from "@/app/generated/prisma";
import { AcheteurTiersForm, DetailPanierForm, LivraisonForm } from "@/prisma/defs-front";

const api = 'http://localhost:3000/api/'

export const getAllCommandes = async () => {
    try {
        const res = await fetch(`${api}commandes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await res.json();
        console.log("Get All Commandes", response);
        return response;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export const createCommande = async (
    panierId: number, 
    notes: string,
    datas: LivraisonForm,
    detailPaniers: DetailPanierForm[], 
    acheteurTiers: AcheteurTiersForm | undefined,
    estReserve: boolean
) => {
    try {
        const details = detailPaniers.map(({ 
            id, devise, designation, modePaiementId, 
            fournisseurId, typeProduit, produit, teneur, 
            autresType, qtteDisponible, ...rest 
        }) => rest);

        const res = await fetch(`${api}clients/1/commandes/create?panierId=${panierId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                panierId: panierId,
                notes: notes,
                datas: datas,
                details: details,
                acheteurTiers: acheteurTiers,
                estReserve: estReserve
            })
        });
        const response = await res.json();

        console.log(response);
        
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create Commande');
    }
}
