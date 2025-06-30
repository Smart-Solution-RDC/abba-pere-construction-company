import { DetailPanier } from "@/app/generated/prisma"

export interface AgentRouteParams { 
    params: {
        clientId: string
        agentId: string
    }
}

export interface TeneurRouteParams { 
    params: {
        agentId: string
        teneurId: string
    }
}

export interface ContactRouteParams { 
    params: {
        clientId: string,
        agentId: string
        contactId: string
    }
}

export interface AdresseRouteParams { 
    params: {
        agentId: string
        adresseId: string
    }
}

export interface DeviseRouteParams { 
    params: {
        agentId: string
        deviseId: string
    }
}

export interface ProduitRouteParams { 
    params: {
        agentId: string
        produitId: string
    }
}

export interface ClientRouteParams { 
    params: {
        agentId: string
        clientId: string
    }
}

export interface FournisseurRouteParams {
    params: {
        agentId: string
        fournisseurId: string
    }
}

export interface CaisseRouteParams { 
    params: { 
        caisseId: string
        agentId: string
    }
}

export interface DepenseRouteParams { 
    params: { 
        agentId: string
        caisseId: string
        mouvementId: string
    }
} 

export interface PanierRouteParams { 
    params: {
        clientId: string,
        agentId: string
        panierId: string
    }
}

export interface DetailRouteParams { 
    params: {
        agentId: string
        panierId: string
        detailId: string 
    }    
}

export interface DetailPanierForm {
    produits: DetailPanier[]
} 

export type tableType = 
    'caisse' | 'client' | 'produit' | 
    'contact' | 'mouvementCaisse' | 'fournisseur' | 
    'panier' | 'agent' | 'achat' | 'vente' | 
    'commande' | 'clotureCaisse' | 'detailPanier' | 'devise' 

export type Type = 'inc' | 'dec'

export type TypeMouvement = 'ENTREE' | 'SORTIE'

export type TypeAcheteur = 'NOUVEAU' | 'ORDINAIRE' | 'FOURNISSEUR' | 'CLIENT' | 'AGENT'

export interface AchatRouteParams {
    params: {
        agentId: string
        achatId: string
    }
}

export interface ProduitsDisponible { 
    id: number;
    designation: string;
    deviseId: true;
    qtteDisponible: number; 
    prixUnitaire: number;
    devise: {
        tauxDEchange: string
    }
}

export type MoyenPaiment = 'cash' | 'banque' | 'mobile' | 'cheque' | 'autres'

// Changer fournisseur a fourniture
export type CategorieMouvement = 'ACHAT' | 'VENTE' | 'COMMANDE' | 'FOURNITUR' | 'SALAIRE' | 'LOYER' | 'TAXE' | 'AUTRES'

export type ModePaiement = 'CASH' | 'BANQUE' | 'CREDIT' | 'MOITIE_CASH' | 'MOITIER_CREDIT'
 
export interface AchatRouteParams {
    caisseId: string
    moyen_paiement: MoyenPaiment
    type_mouvement: TypeMouvement
    categorie: CategorieMouvement
    enregistrerParId: string
    referenceExterne: string
    description: string
}
 

export interface VenteRouteParams {
    params: {
        agentId: string, 
        panierId: string, 
        venteId: string
    }
}
 

export interface CommandeParams { 
    params: { 
        agentId: string,
        commandeId: string
    }
}


export interface ReservationParams {
    params: {
        reservationId: string
    }
}

export interface ProduitParams { 
    params: {
        produitId: string 
    }
}

export interface PanierParams {
    params: {
        panierId: string
    }
}

export interface DeviseParams {
    params: {
        deviseId: string;
    }
}

export interface ClotureRouteParams {
    params: {
        caisseId: string
    }
}

export interface ClotureParams {
    params: {
        caisseId: string,
        clotureId: string,
    }
}

export interface PaiementForm {
    montant: number,
    modePaiement: ModePaiement
} 
