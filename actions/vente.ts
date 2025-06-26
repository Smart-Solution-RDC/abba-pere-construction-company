import { Produit } from "@/app/generated/prisma";

import { DetailPanierForm } from "@/prisma/defs-front"

const api = 'http://localhost:3000/api/';
export async function createVente(panierId: number, detailsPanier: DetailPanierForm[], client: any) {
    try {
        const produits = detailsPanier.map(detail => ({ ...detail, panierId }));
        const newProduits = produits.map(({ id, devise, designation, produit, teneur, ...rest }) => rest);
                
        const res = await fetch(`${api}agents/1/paniers/${panierId}/vendre`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                details: newProduits,
                client: client
            })
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

