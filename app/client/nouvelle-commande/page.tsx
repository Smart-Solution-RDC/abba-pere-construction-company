"use client";

import { useEffect, useState } from "react";
import { ClientLayout } from "@/components/ClientLayout";
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
import { Acheteur, AcheteurTiersForm, Agent, Client, DetailPanierForm, Devise, Fournisseur, LivraisonForm, ModePaiement, PaiementData, ProduitForm, Response } from "@/prisma/defs-front";
import { createPanier, getPanierId } from "@/actions/panier";
import { createVente } from "@/actions/vente";
import { getDevises } from "@/actions/devises";
import { getModePaiements } from "@/actions/mode-paiement";
import { AcheteurDialog } from "@/components/acheteur-dialog";
import { AcheteurTiersDialog } from "@/components/acheteur-tiers-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { createCommande } from "@/actions/commandes";


export default function NouvelleVentePage() {
  const [data, setData] = useState<LivraisonForm>({
    dateLivraison: "",
    adresseLivraison: ""
  });

  const [produitSelectionne, setProduitSelectionne] = useState("");
  const [quantite, setQuantite] = useState(1);
  // const [panier, setPanier] = useState<DetailPanier[]>([]);
  const [panierId, setPanierId] = useState();
  const [detailsPanier, setDetailsPanier] = useState<DetailPanierForm[]>([]);
  const [notes, setNotes] = useState("");
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
  
  let [response, setResponse] = useState<Response>();

  const get_produits = async () => {
    setProduits(await getProduits());
  }; 

  const get_panier_id = async () => {  
      setPanierId(await getPanierId());
    } 

  const get_devises = async () => {
    setDevises(await getDevises());
  }

  const get_mode_paiements = async () => {
    setModePaiements(await getModePaiements());
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
        prixUnitaire: produit.prixUnitaire,
        prixTotalHT: produit.prixUnitaire * quantite,
        deviseId: produit.deviseId,
        prixTotalTTC: 0,
        designation: null,
        teneur: null,
        modePaiementId: null,
        fournisseurId: null,
        autresType: null,
        qtteDisponible: null,
        panierId: panierId ?? 0
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

  const [isReserved, setIsReserved] = useState<boolean>(false);
  const [acheteurTiers, setAcheteurTiers] = useState<AcheteurTiersForm>()
  const getAcheteurTiers = (acheteur: AcheteurTiersForm | undefined) => {
    setAcheteurTiers(acheteur)
  }

  let totalVente = detailsPanier.reduce((sum, produit) => sum + produit.prixTotalHT, 0);
  
  let modes = [];
  let prixTotalConverti = 0;
  let deviseConverti = '';
  if (paiement.deviseId) {

    for (let i = 0; i < devises.length; i++) {
      const devise = devises[i];
      if (paiement.deviseId !== devise.id) {
        prixTotalConverti = totalVente;
        deviseConverti = 'USD';
      } else {
        prixTotalConverti = totalVente * devise.tauxDEchange;
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

  const traiterCommande = async () => {
    
    if (detailsPanier.length === 0) {
      toast({
        title: "Erreur!",
        description:
          "Veuillez ajouter des produits sur la penier.",
        variant: "destructive",
      });
      return;
    }
    
    paiement.montant = prixTotalConverti;
      

    setIsProcessing(true);

    if (panierId) {
      response = await createCommande(
        panierId, 
        notes,
        data,
        detailsPanier,
        acheteurTiers, 
        isReserved
      );
    }

    // Simulation du traitement
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Générer le reçu et la facture
    // const formattedData = formatCommandeForPDF(venteData);
    // generateBonCommande(formattedData); // Reçu pour le client
    // generateFacture(formattedData); // Facture pour la comptabilité

    if (response && response.message && response.data) {
      toast({
        title: `${response.message}`,
        description: (
        <>
          Visualisez la commande avant l'impression.
          <br />
          <a href={`/agent/commandes/${response.data}`} className="text-green-700 underline ml-1">
            Voir le document.
          </a>
        </>
        ),
      });

      
      setPanierId(undefined);
      setDetailsPanier([]);
      setNotes("");
      setPaiement({deviseId: 0, modePaiementId: 0, montant: 0});
      setIsProcessing(false);
    }

    if (response && response.error) {
      toast({
        title: "Erreur",
        description:
          response.error,
        variant: "destructive",
      });
      setIsProcessing(false);
    } 

  };

  return (
    <ClientLayout breadcrumbs={[{ label: "Nouvelle Commande" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nouvelle Commande</h1>
          <p className="text-muted-foreground">
            Enregistrer une nouvelle commande
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formulaire de vente */}
          <div className="space-y-6">

            {/* Sélection produit */}
            <Card>
              <CardHeader>
                <CardTitle>Ajouter un Produit</CardTitle>
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
                    {detailsPanier.map((detail: DetailPanierForm) => (
                      <div
                        key={detail.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium">{detail.produit.designation}</h4>
                          <p className="text-sm text-muted-foreground">
                            {detail.prixUnitaire.toLocaleString()} {detail.devise.code} ×{" "}
                            {detail.qtte}
                          </p>
                        </div>
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
                            <span className="w-8 text-center text-sm">
                              {detail.qtte}
                            </span>
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
                            <p className="font-medium">
                              {detail.prixTotalHT.toLocaleString()} {detail.devise.code}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">
                        {totalVente.toLocaleString()} USD
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes (optionnel)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes sur la commande..."
                  className="resize-none"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">  
            {/* Informations client */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de Livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tel">Date de livraison *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={data.dateLivraison}
                    onChange={(e) =>
                      setData({ ...data, dateLivraison: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="AdresseLivraison">Adresse de livraison *</Label>
                  <Textarea
                    id="adresseLivraison"
                    // disabled={!!clientSelected || !!fournisseurSelected || !!agentSelected}
                    value={data.adresseLivraison}
                    className="resize-none"
                    onChange={(e) =>
                      setData({ ...data, adresseLivraison: e.target.value })
                    }
                    placeholder="Adresse de livraison"
                  />
                </div>

                {acheteurTiers && <div>
                  <span>Acheteur Tiers: <strong className="text-green-600 capitalize">{acheteurTiers?.nom} {acheteurTiers?.postnom}</strong></span>
                </div>}

                <AcheteurTiersDialog getAcheteurTiers={getAcheteurTiers} />
                
                <div className="justify-center flex align-center">
                  <Checkbox
                    id="reservation"
                    checked={isReserved}
                    onCheckedChange={(checkbox) => setIsReserved(checkbox as boolean)}
                  /> {isReserved}
                  <Label htmlFor="reservation" className="underline ml-1">Réservez les produits.</Label>
                </div>

                {isReserved && <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Information :</h4>
                  <p className="text-sm text-yellow-700">
                    Le paiement de votre commande garantit la réservation des produits en stock. Vous pouvez effectuer le règlement en ligne, puis nous contacter pour confirmation.
                    <br />
                    <strong>Num. Compte: ...</strong>
                  </p>
                </div>}

                <Button
                  onClick={traiterCommande}
                  disabled={
                    isProcessing || detailsPanier.length === 0 
                  }
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isProcessing ? "Traitement en cours..." : "Valider la commande"}
                </Button>
              </CardContent>
            </Card>            
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
