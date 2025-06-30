import { Produit } from "@/app/generated/prisma";
import { API } from "@/prisma/utils";

const api = 'http://localhost:3000/api/'

export async function getPanierId () {
    try {
        const res = await fetch (`${api}agents/1/paniers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);        
    }    
}

export async function createPanier () {
    try {
        const res = await fetch (`${api}agents/1/paniers/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('')
        });

        let data = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);        
    }    
}