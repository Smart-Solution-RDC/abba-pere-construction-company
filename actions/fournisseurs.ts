import { FournisseurForm } from "@/prisma/defs-front";




const api = 'http://localhost:3000/api/'

export async function getFournisseursWithoutPagination () {
    try {
        const res = await fetch (`${api}agents/1/fournisseurs?notWithPagination=true`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data =  await res.json();
        return data;
    } catch (error) {
        console.log(error);        
    }    
}

export async function getFournisseurs (search: string | null) {
    try {
        const res = await fetch(`${api}agents/1/fournisseurs?search=${search ?? ''}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        
    }
}


export async function createFournisseur (form: FournisseurForm) {
    try {
        const res = await fetch (`${api}agents/1/fournisseurs/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        let data =  await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);        
    }
}
