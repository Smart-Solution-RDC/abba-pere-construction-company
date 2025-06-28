

export interface ProduitForm {
    id: number,
    designation: string,
    prixUnitaire: number,
    teneur: {
        valeur: number
    },
    // qtteDisponible: true,
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
    prixTotalTTC: number | null,
    deviseId: number | null,
    modePaiementId: number | null,
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
    nom: string
}

export interface Response {
    error: String | undefined, 
    message: String | undefined, 
    data: object | number | undefined
}


