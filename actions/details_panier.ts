import { Produit } from "@/app/generated/prisma";

import { DetailPanierForm } from "@/prisma/defs-front"

const api = 'http://localhost:3000/api/';
export async function createDetail(panierId: number, detailsPanier: DetailPanierForm[]) {
    try {
        const produits = detailsPanier.map(detail => ({ ...detail, panierId }));
        const newProduits = produits.map(({ id, devise, designation, produit, teneur, ...rest }) => rest);
        const res = await fetch(`${api}agents/1/paniers/${panierId}/details/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduits)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

