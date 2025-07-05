

const api = 'http://localhost:3000/api/'

export const getCaisses = async () => {
  try {
    const res = await fetch(`${api}agents/1/caisses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error:", error);
    return [];
  }
}; 

