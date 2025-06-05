export type tableType = 'caisse' | 'contact' | 'mouvementCaisse'

export interface PanierParams { 
    params: {
        panierId: string, 
    }
}

export interface DetailParams { 
    params: {
        panierId: string, 
        detailId: string 
    }    
}

export interface CaisseParams { 
    params: { 
        caisseId: string
    }
}

export interface MouvementParams { 
    params: { 
        caisseId: string
        mouvementId: string
    }
} 

export type TypeMouvement = 'ENTREE' | 'SORTIE'

export interface AchatParams {
    params: {
        achatId: string
    }
}

export interface AchatRouteParams {
    caisseId: string
    type_mouvement: TypeMouvement
    enregistrerParId: string
    referenceExterne: string
    description: string
}
 

export interface VenteRouteParams {
    params: {
        panierId: string, 
        venteId: string
    }
}
 

export interface CommandeParams { 
    params: { 
        commandeId: string
    }
}

export interface TeneurParams { 
    utilisateurId: string
}

export interface UtilisateurParams { 
    params: {
        utilisateurId: string
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