export const fetchUsers = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/utilisateurs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export const uniqueUser = async (id: number) => {
    try {
        const req = await fetch(`http://localhost:3000/api/utilisateurs/${id}`);
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(error);
        return [];
    }
}
