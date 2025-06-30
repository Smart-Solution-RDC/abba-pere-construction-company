"use client";

import { useEffect, useState } from "react";
import { CaissierLayout } from "@/components/CaissierLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, ShoppingCart, Receipt, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  generateBonCommande,
  generateFacture,
  formatCommandeForPDF,
} from "@/utils/pdfGenerator";
import { getProduits } from "@/actions/produits";
import { DetailPanierForm, Devise, Fournisseur, ModePaiement, PaiementData, ProduitForm, Response } from "@/prisma/defs-front";
import { createPanier, getPanierId } from "@/actions/panier";
import { getDevises } from "@/actions/devises";
import { getModePaiements } from "@/actions/mode-paiement";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getFournisseursWithoutPagination } from "@/actions/fournisseurs";
import { FournisseursDialog } from "@/components/fournisseurs-dialog";
import { createAchat } from "@/actions/achats";


export default function NouvelleAchatPage() {
  const [produitSelectionne, setProduitSelectionne] = useState("");
  const [quantite, setQuantite] = useState(1);
  const [prixUnitaire, setPrixUnitaire] = useState(0);
  const [panierId, setPanierId] = useState<number | undefined>(undefined);
  const [detailsPanier, setDetailsPanier] = useState<DetailPanierForm[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const [produits, setProduits] = useState<ProduitForm[]>([]);
  const [devises, setDevises] = useState<Devise[]>([]);
  const [modePaiements, setModePaiements] = useState<ModePaiement[]>([]);
  const [paiement, setPaiement] = useState<PaiementData>({
    deviseId: 0,
    modePaiementId: 0,
    montant: 0
  });

  const [fournisseurSelected, setFournisseurSelected] = useState<Fournisseur[]>();
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  let [response, setResponse] = useState<Response>();

  const get_produits = async () => {
    setProduits(await getProduits());
  }; 

  const get_panier_id = async () => {
    // const data = await getPanierId();
    // if (data.detailsPanier) setDetailsPanier(data.detailsPanier);
    // detailsPanier.map(item => item.produitId === data.detailsPanier.id);

    setPanierId(await getPanierId());
  }

  const get_devises = async () => {
    setDevises(await getDevises());
  }

  const get_mode_paiements = async () => {
    setModePaiements(await getModePaiements());
  }

  const getFournisseur = (fournisseur: Fournisseur | undefined) => {
    if (!fournisseur) return;
    
    setFournisseurSelected((prev) => {
      if (!prev) return [fournisseur];
      return [...prev, fournisseur];
    });
  }

  useEffect(() => {
    get_panier_id();
    get_produits();
    get_devises();
    get_mode_paiements();
  }, []);

  const ajouterAuPanier = async () => {
    console.log(panierId);
    if (panierId == undefined) {
        setProduitSelectionne("");
        setPanierId(await createPanier());
    }

    const produit = produits.find((p) => String(p.id) === produitSelectionne);
    if (!produit) return;
    
    const produitExistant = detailsPanier.find((p) => p.id === produit.id);
    if (produitExistant) {
      setDetailsPanier(
      detailsPanier.map((p) =>
        p.id === produit.id
        ? {
          ...p,
          qtte: p.qtte + quantite,
          prixTotalHT: (p.qtte + quantite) * p.prixUnitaire,
          }
        : p
      )
      );
    } else {
      setDetailsPanier([
      ...detailsPanier,
      {
        ...produit,
        produitId: produit.id,
        produit: produit,
        qtte: quantite,
        prixUnitaire: prixUnitaire,
        prixTotalHT: prixUnitaire * quantite,
        deviseId: produit.deviseId,
        typeProduit: produit.typeProduit,
        panierId: null,
        prixTotalTTC: (prixUnitaire * quantite) * 0.16,
        designation: null,
        teneur: null,
        modePaiementId: null,
        fournisseurId: null
      },
      ]);
    }

    setProduitSelectionne("");
    setQuantite(1);
  };

  const retirerDuPanier = (id: number) => {
    setDetailsPanier(detailsPanier.filter((p) => p.id !== id));
  };

  const modifierQuantite = (id: number, nouvelleQuantite: number) => {
    if (nouvelleQuantite <= 0) {
      retirerDuPanier(id);
      return;
    }

    setDetailsPanier(
      detailsPanier.map((p) =>
        p.id === id
          ? {
              ...p,
              qtte: nouvelleQuantite,
              prixTotalHT: nouvelleQuantite * p.prixUnitaire,
            }
          : p
      )
    );
  };

  const modifierPrixUnitaire = (id: number, qtte: number, nouveauPrixUnitaire: number) => {
    setPrixUnitaire(nouveauPrixUnitaire);
    
    setDetailsPanier(
      detailsPanier.map((p) =>
      p.id === id
        ? {
          ...p,
          prixUnitaire: nouveauPrixUnitaire,
          prixTotalHT: qtte * nouveauPrixUnitaire,
          prixTotalTTC: (qtte * nouveauPrixUnitaire) * 0.16,
        }
        : p
      )
    );
  }

  let totalAchat = detailsPanier.reduce((sum, produit) => sum + produit.prixTotalHT, 0);
  
  let modes = [];
  let prixTotalConverti = 0;
  let deviseConverti = '';
  if (paiement.deviseId) {

    for (let i = 0; i < devises.length; i++) {
      const devise = devises[i];
      if (paiement.deviseId !== devise.id) {
        prixTotalConverti = totalAchat;
        deviseConverti = 'USD';
      } else {
        prixTotalConverti = totalAchat * devise.tauxDEchange;
        deviseConverti = devise.code;
      }
    }

    for (let i = 0; i < modePaiements.length; i++) {
      const mode = modePaiements[i];
      if (mode.caisse.deviseId == paiement.deviseId) {
        modes.push(mode);
      }
      if (mode.id == paiement.modePaiementId) {
        if (mode.type === 'MOITIER_CASH' || mode.type === 'MOITIER_CREDIT') {
          prixTotalConverti = prixTotalConverti / 2;
        }
      }
    }
    
  }

  const traiterAchat = async () => {
    
    if (
        detailsPanier.length === 0 || 
        !paiement.deviseId || 
        !paiement.modePaiementId || 
        (!fournisseurSelected) || 
        !(fournisseurSelected.length == detailsPanier.length)) {
      
          toast({
            title: "Erreur",
            description:
              "Veuillez remplir les informations des fournisseurs et ajouter des produits",
            variant: "destructive",
          });
      return;
    }

    setIsProcessing(true);

    paiement.montant = prixTotalConverti;

    if (panierId) {

      for (let i = 0; i < detailsPanier.length; i++) {
        const detail = detailsPanier[i];
        detail.fournisseurId = fournisseurSelected[i].id;
        detail.panierId = panierId;
      }

      response = await createAchat(
        panierId, 
        detailsPanier, 
        paiement
      );

    }

    console.log({response, panierId});
    
    // Simulation du traitement
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    if (response && response.message && response.data) {
      toast({
        title: `${response.message}`,
        description: (
        <>
          Visualisez les details avant l'impression.
          <br />
          <a href={`/caissier/achats/${response.data}/print`} className="text-green-700 underline ml-1">
            Imprimer le bordereau.
          </a>
        </>
        ),
      });

       // Reset du formulaire
      setFournisseurSelected(undefined);
      setDetailsPanier([]);
      setPanierId(undefined);
      setPrixUnitaire(0);
      setPaiement({deviseId: 0, modePaiementId: 0, montant: 0});
      setIsProcessing(true);
    }


    if (response && response.error ) {
      toast({
        title: "Erreur",
        description:
          response.error,
        variant: "destructive",
      });
      setIsProcessing(false);
    } 

    // console.log(response);
    
    // Générer le reçu et la facture
    // const formattedData = formatCommandeForPDF(venteData);
    // generateBonCommande(formattedData); // Reçu pour le client
    // generateFacture(formattedData); // Facture pour la comptabilité
  };

  return (
    <CaissierLayout breadcrumbs={[{ label: "Nouvel Approvisionnement" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nouvel Approvisionement</h1>
          <p className="text-muted-foreground">
            Enregistrer un nouvel approvisionnement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formulaire de vente */}
          <div className="space-y-6">

            {/* Sélection produit */}
            <Card>
              <CardHeader>
                <CardTitle>Séléctionner un Produit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="produit">Produit</Label>
                  <Select
                    value={produitSelectionne}
                    onValueChange={setProduitSelectionne}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un produit" />
                    </SelectTrigger>
                    <SelectContent>
                      {produits.map((produit) => (
                        <SelectItem key={produit.id} value={String(produit.id)}>
                          {produit.designation} - {produit.prixUnitaire.toLocaleString()} {produit.devise.code} 
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

              <div className="flex justify-between items-center">
                <div>
                  <Label htmlFor="quantite">Quantité</Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantite(Math.max(1, quantite - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantite}
                      onChange={(e) =>
                        setQuantite(
                          Math.max(1, Number.parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-20 text-center"
                      min="1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantite(quantite + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

              <div>
                  <div className="text-end"><Label>...</Label></div>
                  <Button
                    onClick={ajouterAuPanier}
                    disabled={!produitSelectionne}
                    className=" bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter au Panier
                  </Button>
              </div>                
              </div>
              </CardContent>
            </Card>

          {/* Panier et récapitulatif */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Panier ({detailsPanier.length} article{detailsPanier.length > 1 ? "s" : ""})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {detailsPanier.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Aucun produit dans le panier
                  </p>
                ) : (
                  <div className="space-y-4">
                    {detailsPanier.map((detail: DetailPanierForm, indexDetail) => (
                      <div
                        key={detail.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="w-full">
                            <div className="flex">
                                <div className="flex-1">
                                    <h4 className="font-medium">{detail.produit.designation.length > 15 ? detail.produit.designation.slice(0,1).toUpperCase()+detail.produit.designation.slice(1,15)+'... ('+detail.typeProduit+')': detail.produit.designation.slice(0,1).toUpperCase()+detail.produit.designation.slice(1)+' ('+detail.typeProduit+')'}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {detail.prixUnitaire} {detail.devise.code} ×{" "}
                                        {detail.qtte}
                                    </p>
                                </div>
                                {/* // right */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                modifierQuantite(
                                                detail.id,
                                                detail.qtte - 1
                                                )
                                            }
                                        >
                                        <Minus className="h-3 w-3" />
                                        </Button>
                                            <span className="w-8 text-center text-sm">{detail.qtte}</span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                modifierQuantite(
                                                detail.id,
                                                detail.qtte + 1
                                                )
                                            }
                                        >
                                        <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium"> {detail.prixTotalHT.toLocaleString()} {detail.devise.code} </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                              <Input
                                className="mt-2"
                                type="number"
                                min={1}
                                value={detail.prixUnitaire}
                                onChange={(e) => 
                                  modifierPrixUnitaire(
                                    detail.id,
                                    detail.qtte,
                                    Number(e.target.value)
                                  )}
                                placeholder="Prix unitaire d'achat"
                              />
                            </div>
                            
                            <div>
                                {fournisseurSelected && fournisseurSelected.map((fournisseur, indexFournisseur) => 
                                <div key={indexFournisseur} className="mt-2">
                                    {indexDetail == indexFournisseur && <><span>Séléctionné : </span><strong className="text-green-600">{fournisseur.nom.length > 15 ? fournisseur.nom.slice(0, 1).toUpperCase() + fournisseur.nom.slice(1, 15) + '...' : (fournisseur.nom?.slice(0, 1).toUpperCase() ?? '') + (fournisseur.nom?.slice(1) ?? '')}</strong></>}
                                </div> )}
                            </div>
                            <FournisseursDialog typeProduit={detail.typeProduit} getFournisseur={getFournisseur} />
                        </div>
                    </div>
                ))}

                    <Separator />

                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">
                        {totalAchat.toLocaleString()} USD
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

          </div>

          <div className="space-y-6">  
            
            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Information de Paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Devise</Label>
                    <Select
                    value={String(paiement.deviseId)}
                    onValueChange={(value) =>
                      setPaiement({ ...paiement, deviseId: Number(value) })
                    }
                    >
                    <SelectTrigger >
                      <SelectValue placeholder="Sélectionner une devise" />
                    </SelectTrigger>
                    <SelectContent>
                      {devises.map((devise) => (
                        <SelectItem key={devise.id} value={String(devise.id)}>
                          {devise.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Mode de paiement</Label>
                  <Select
                    disabled={!paiement.deviseId || !detailsPanier.length }
                    value={String(paiement.modePaiementId)}
                    onValueChange={(value) => 
                      setPaiement({ ...paiement, modePaiementId: Number(value) })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner le mode de paiement" />
                    </SelectTrigger>
                    <SelectContent>
                      {modes.map((mode) => (
                        <SelectItem key={mode.id} value={String(mode.id)} >
                          {mode.type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                { <div><Label className="text-green-600">Montant Total : {prixTotalConverti} {deviseConverti ? deviseConverti : 'USD'}</Label></div>}
                {/* <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Après validation :</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <Receipt className="mr-2 h-4 w-4" />
                      Reçu généré pour le client
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Facture générée pour la comptabilité
                    </li>
                  </ul>
                </div> */}

                <Button
                  onClick={traiterAchat}
                  disabled={
                    isProcessing ||
                    (!fournisseurSelected) ||
                    !(fournisseurSelected.length == detailsPanier.length) ||
                    // !(prixUnitaire) ||
                    detailsPanier.length === 0 ||
                    !paiement.deviseId || !paiement.modePaiementId
                  }
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isProcessing ? "Traitement en cours..." : "Valider l'achat"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CaissierLayout>
  );
}
 