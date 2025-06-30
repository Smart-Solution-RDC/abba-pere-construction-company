



const api = 'http://localhost:3000/api/'

export async function getHistorique () {
    try {
        const res = await fetch (`${api}agents/1/historique`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let datas =  await res.json();
        // console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);        
    }    
}

