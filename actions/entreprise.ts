

const api = 'http://localhost:3000/api/'

export async function findUnique() {
    try {
        const res = await fetch (`${api}/entreprise`, {
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