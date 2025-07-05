import { JSX } from "react"


export interface ProduitForm {
    id: number,
    designation: string,
    prixUnitaire: number,
    teneur: { valeur: number },
    typeProduit: string
    prixUnitaireAchat: number,
    deviseId: number,
    devise: {
        id: number,
        code: string,
        tauxDEchange: number
    }
}

export interface DetailPanierForm {
    id: number,
    produitId: number,
    produit: { designation: string },
    qtte: number,
    prixUnitaire: number,
    prixTotalHT: number,
    devise: { code: string },
    designation: null
    teneur: { valeur: number } | null,
    prixTotalTTC: number,
    deviseId: number | null,
    modePaiementId: number | null,
    typeProduit: string,
    fournisseurId: number | null,
    panierId: number | null,
}

export interface Devise {
    id: number,
    code: string,
    tauxDEchange: number
}

type TypeModePaiement = 'CASH' | 'BANQUE' | 'CREDIT' | 'MOITIER_CREDIT' | 'MOITIER_CASH'
export interface ModePaiement {
    id: number,
    type: TypeModePaiement,
    caisse: {
        deviseId: number
    }
}


export interface PaiementData {
    deviseId: number,
    modePaiementId: number,
    montant: number
}

export interface Acheteur {
    nom: string;
    tel: string;
    dateLivraison: string;
    adresseLivraison: string;
    clientSelectedId: number | null;
    agentSelectedId: number | null;
    fournisseurSelectedId: number | null;
  }

export interface Client {
    id: number,
    nom_complet: string
}

export interface Agent {
    id: number,
    nom_complet: string
}

export interface Fournisseur {
    id: number,
    nom: string,
    typeProduit: string
}

export interface Response {
    error: String | undefined, 
    message: String | undefined, 
    data: any | undefined
}

export interface ResponseValidation {
    success: boolean,
    message: string,
    error: string | null,
    datas: any
}

export interface HistoriqueFormatData {
    map(arg0: (data: any, i: any) => JSX.Element): import("react").ReactNode
    montant: number,
    devise: {
        symbole: string
    },
    modePaiement: {
        type: string
    },
    achat: {
        id: number,
        statut: string,
        updatedAt: string
    } | null,
    vente: {
        id: number,
        statut: string,
        updatedAt: string
    } | null,
    commande: {
        id: number,
        statut: string,
        updatedAt: string
    } | null
}

export interface AchatUnique {
    id: number,
    statut: string,
    adresseLivraison: string,
    dateLivraison: string,
    createdAt: string,
    updatedAt: string,
    panier: {
        detailPaniers: {
            produit: { designation: string }
            qtte: number,
            prixUnitaire: number,
            prixTotalHT: number,
            devise: { symbole: string },
            fournisseur: { nom: string, typeProduit: string }
        }[]
    },
    agent: {
        nom_complet: string
    },
    paiements: {
        montant: number,
        modePaiement: { type: string },
        devise: { symbole: string }
    }[]
}

export interface VenteUnique {
    id: number,
    nom: string | null,
    tel: string | null,
    statut: string,
    adresseLivraison: string | null,
    dateLivraison: string | null,
    notes: string | null,
    panier: {
        detailPaniers: {
            produit: {
                designation: string
            },
            devise: { symbole: string },
            qtte: number,
            prixUnitaire: number,
            prixTotalHT: number,
        }[]
    },
    paiements: {
        montant: number,
        devise: { symbole: string },
        modePaiement: { type: string }
    }[],
    enregistrerPar: string | null,
    client: {
        id: number,
        nom_complet: string,
        contacts: { tel: string }[]
    } | null,
    fournisseur: {
        id: number,
        nom: string,
        contacts: { tel: string }[]
    } | null,
    agent: {
        id: number,
        nom_complet: string,
        contacts: { tel: string }[]
    } | null,
    createdAt: string | null,
    updatedAt: string | null
}

export interface VentePrint {
    id: number,
    entreprise: Entreprise,
    nom: string | null,
    enregistrerPar: string | null,
    client: {
        id: number,
        nom_complet: string,
        contacts: { tel: string }[]
    } | null,
    fournisseur: {
        id: number,
        nom: string,
        contacts: { tel: string }[]
    } | null,
    agent: {
        id: number,
        nom_complet: string,
        contacts: { tel: string }[]
    } | null,
    panier: {
        detailPaniers: {
            produit: {
                designation: string
            },
            devise: { symbole: string },
            qtte: number,
            prixUnitaire: number,
            prixTotalHT: number,
        }[]
    },
    paiements: {
        montant: number,
        devise: { symbole: string },
        modePaiement: { type: string }
    }[],
    updatedAt: string | null
}

export interface Entreprise {
    raison_jurifique: string,
    email: string,
    identification_nationale: string,
    num_impot: string,
    raison_sociale: string,
    rccm: string,
    slogan: string,
    Contact: { tel: string }[],
    Adresse: { adresse: string }[]
}

export interface Agent {
    id: number,
    nom_complet: string,
    contacts: { tel: string }[]
}

export interface Panier {
    detailPaniers: {
        produit: {
            designation: string
        },
        devise: { symbole: string },
        qtte: number,
        fournisseur: { nom: string } | null,
        prixUnitaire: number,
        prixTotalHT: number,
    }[]
}

export interface Paiement {
    montant: number,
    devise: { symbole: string },
    modePaiement: { type: string }
}
export interface AchatPrint {
    id: number,
    enregistrerPar: string,
    entreprise: Entreprise,
    agent: Agent,
    panier: Panier,
    paiements: Paiement[]
}

export interface Meta {
    currentPage: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    limit: number,
    totalItems: number,
    totalPages: number
}

export interface Rapports {
    data: {
        createdAt: string,
    }[],
    meta: Meta
}

export interface RapportDocument {
    id: number,
    statut: string,
    nom: string | null,
    client: Client,
    agent: Agent,
    fournisseur: Fournisseur,
    // entreprise: Entreprise,
    paiements: Paiement[]
}

export interface Produit {
    id: number,
    designation: string,
    typeProduit: string,
    autresType: string,
    teneur: { valeur: number },
    devise: { code: string },
    prixUnitaire: number,
    qtteDisponible: number
}

// export interface TypeProduits [
//     {
//         label: 'ciment',
//         value: 'CIMENT'
//     },
//     {
//         label: 'carreaux',
//         value: 'CARREAUX'
//     },
//     {
//         label: 'fer à béton',
//         value: 'FER_A_BETON'
//     },
//     {
//         label: 'jepsen',
//         value: 'JEPSEN'
//     },
//     {
//         label: 'autres',
//         value: 'AUTRES'
//     },
// ]

export interface Data {
    id: number,
    email: string,
    picture: string,
    nom_complet: string,
    contacts: { tel: string }[],
    adresses: { adresse: string }[],
}
export interface ClientDatas {
    data: Data[],
    meta: Meta
}

export interface ClientForm {
    email: string,
    nom: string,
    postnom: string,
    tel: string,
    adresse: string
}

export let types = [
    {
      label: 'ciment',
      value: 'CIMENT'
    },
    {
      label: 'carreau',
      value: 'CARREAU'
    },
    {
      label: 'fer à béton',
      value: 'FER_A_BETON'
    },
    {
      label: 'jepsen',
      value: 'JEPSEN'
    },
    {
      label: 'autres',
      value: 'AUTRES'
    }
  ];


  export interface FournisseurForm {
    nom: string,
    email: string,
    typeProduit: string,
    tel: string,
    adresse: string
  }

  export interface FournisseurData {
    id: number,
    nom: string,
    email: string,
    typeProduit: string,
    autresTypes: string,
    adresses: { adresse: string }[],
    contacts: { tel: string }[]
  }

  export interface FournisseurDatas {
    data: FournisseurData[],
    meta: Meta
}

export interface Caisse {
    id: number,
    nom: string,
    statut: string,
    devise: { code: string, symbole: string },
    montant: number
}