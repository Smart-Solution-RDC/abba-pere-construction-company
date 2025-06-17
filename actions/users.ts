export const fetchUsers = async () => {
    try {
        const result = await fetch(`http://localhost:3000/api/agents`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await result.json();
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
