
const api = 'http://localhost:3000/api/'

export async function getAllTeneurs () {
    try {
        const res = await fetch (`${api}agents/1/teneurs`, {
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

