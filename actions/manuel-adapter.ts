
const api = 'http://localhost:3000'

export async function verification() {
    try {
        const res = await fetch(`${api}/api`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);        
    }
}