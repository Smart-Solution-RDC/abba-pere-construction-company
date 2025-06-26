import { API } from "@/prisma/utils";

const api = 'http://localhost:3000/api/'

export async function getProduits () {
    try {
        const res = await fetch(`${api}agents/1/produits`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    };
}
