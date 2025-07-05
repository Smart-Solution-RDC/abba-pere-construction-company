
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

export async function createProduit (form: any) {
    
    try {
        const res = await fetch(`${api}agents/1/produits/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...form,
                deviseId: parseInt(form.deviseId) ?? null,
                teneurId: parseInt(form.teneurId) ?? null,
                prixUnitaire: parseInt(form.prixUnitaire) ?? null,
                typeProduit: form.typeProduit !== '' ? form.typeProduit : null,
                autresType: form.autresType !== '' ? form.autresType : null,
            })
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    };
}

export async function deleteProduit (id: number) {
    try {
        const res = await fetch(`${api}agents/1/produits/${id}/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        return data;
    } catch (error) {
        console.log(error);
        return [];
    };
}


