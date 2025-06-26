

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

