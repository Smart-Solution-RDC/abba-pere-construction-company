

const api = 'http://localhost:3000/api/'

export async function getDevises () {
    try {
        const res = await fetch (`${api}agents/1/devises`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        });

        let datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);   
        return []     ;
    }    
}

const API = process.env.NEXT_PUBLIC_API;

export const getAllDevises = async () => {
  try {
    const res = await fetch(`${API}/api/agents/1/devises`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch devises. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("getAllDevises error:", error);
    return [];
  }
};

export const getSingleDevise = async (id: number) => {
  try {
    const res = await fetch(`${API}/api/agents/1/devises${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch agent with ID ${id}. Status: ${res.status}`);
    }

    const agent = await res.json();
    console.log("Single Devise:", agent);
    return agent;
  } catch (error) {
    console.error("getSingleDevise error:", error);
    return null;
  }
};

export const createDevise = async (agentData: {
    nom: string;
    code: string;
    symbole: string;
    tauxDEchange: number;
}) => {
    try {
        const res = await fetch(`${api}agents/1/devises/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(agentData)
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erreur création agent:", error);
        throw new Error('Erreur lors de la création de l’agent');
    }
};

export const updateDevise = async (
  id: number,
  devise: {
    nom: string;
    code: string;
    symbole: string;
    tauxDEchange: number;
  }
) => {
  try {

    const res = await fetch(`${api}agents/1/devises/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(devise)
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error?.error || `Échec de mise à jour de l'agent avec l'ID ${id}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Erreur mise à jour agent:", error);
  }
};


export const deleteDevise = async (id: number) => {
  try {
    const res = await fetch(`${api}agents/1/devises/${id}/remove`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const datas = await res.json();
    return datas;
  } catch (error) {
    console.error("Erreur suppression agent:", error);
  }
};


