import { Produit } from "@/app/generated/prisma";

import { Acheteur, Agent, Client, DetailPanierForm, Fournisseur, PaiementData } from "@/prisma/defs-front"

const api = 'http://localhost:3000/api/';
export async function createVente(
    panierId: number, 
    detailsPanier: DetailPanierForm[], 
    client: Acheteur, 
    paiement: PaiementData
) {
    try {
        const produits = detailsPanier.map(detail => ({ ...detail, panierId }));
        const newProduits = produits.map(({ id, devise, designation, modePaiementId, fournisseurId, typeProduit, produit, teneur, ...rest }) => rest);
                
        const res = await fetch(`${api}agents/1/paniers/${panierId}/vendre`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                details: newProduits,
                client: client,
                paiement: paiement
            })
        });
        const data = await res.json();
        console.log(newProduits);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function findUniqueVente (id: string | null) {
    const venteId = parseInt(id as string, 10);
    try {
        const res = await fetch(`${api}agents/1/ventes/${venteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }
}

export async function deleteVente (id: string | null) {
    // const venteId = if id {
    //     parseInt(id as string, 10);
    // }
    try {
        const res = await fetch(`${api}agents/1/ventes/${id}/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }
}

export async function printVente (id: string | null) {
    const venteId = parseInt(id as string, 10);
    try {
        const res = await fetch(`${api}agents/1/ventes/${venteId}/print`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }
}


export async function RapportJournalier(date: string | null) {
    try {
        const res = await fetch(`${api}agents/1/ventes/journalier?date=${date ?? ''}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let datas = await res.json();
        // console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }
}


export async function VentesJournalier (date: string) {
    try {
        const res = await fetch(`${api}agents/1/ventes/journalier/${date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }
}


