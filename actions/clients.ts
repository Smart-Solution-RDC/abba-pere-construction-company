

const api = 'http://localhost:3000/api/'

export async function getClientsWithoutPagination () {
    try {
        const res = await fetch (`${api}agents/1/clients?notWithPagination=true`, {
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

