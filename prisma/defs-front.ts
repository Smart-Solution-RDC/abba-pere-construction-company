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
    data: object | number | undefined
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
    client: {} | null,
    fournisseur: {} | null,
    agent: {} | null,
    createdAt: string | null,
    updatedAt: string | null
}

