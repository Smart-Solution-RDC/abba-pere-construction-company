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

export async function getClientAchats () {
        
    try {
        const res = await fetch (`${api}clients/1/achats`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);        
    }    
}

export async function getClientUniqueAchat (id: string | null) {
    try {
        const res = await fetch (`${api}clients/1/achats/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);        
    }  

    return id;
}

export async function getUniqueClientCommande (id: string | null ) {
    try {
        const res = await fetch (`${api}clients/1/commandes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let data = await res.json();
        let prix = 0;
        let devise = '';
        for (let i = 0; i < data.panier.detailPaniers.length; i++) {
            const detail = data.panier.detailPaniers[i];
            prix += detail.prixTotalHT;
            devise = detail.devise.symbole;
        }

        data.prix = {
            prixTotal: prix,
            devise: devise
        }

        console.log(data);

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

export async function printAchat (id: string | null) {
    const achatId = parseInt(id as string, 10);
    try {
        const res = await fetch(`${api}agents/1/achats/${achatId}/print`, {
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