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
import { Acheteur, Agent, Client, DetailPanierForm, Devise, Fournisseur, ModePaiement, PaiementData, ProduitForm, Response } from "@/prisma/defs-front";
import { getPanierId } from "@/actions/panier";
import { createVente } from "@/actions/vente";
import { getDevises } from "@/actions/devises";
import { getModePaiements } from "@/actions/mode-paiement";
import { AcheteurDialog } from "@/components/acheteur-dialog";


export default function NouvelleVentePage() {
  const [client, setClient] = useState<Acheteur>({
    nom: "",
    tel: "",
    dateLivraison: "",
    adresseLivraison: "",
    clientSelectedId: null,
    agentSelectedId: null,
    fournisseurSelectedId: null
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

  const [clientSelected, setClientSelected] = useState<Client>();
  const [fournisseurSelected, setFournisseurSelected] = useState<Fournisseur>();
  const [agentSelected, setAgentSelected] = useState<Agent>();

  let [response, setResponse] = useState<Response>();

  const get_produits = async () => {
    setProduits(await getProduits());
  }; 

  const get_panier_id = async () => {
    const data = await getPanierId();
    if (data.detailsPanier) setDetailsPanier(data.detailsPanier);
    detailsPanier.map(item => item.produitId === data.detailsPanier.id);

    setPanierId(data.panierId);
  }

  const get_devises = async () => {
    setDevises(await getDevises());
  }

  const get_mode_paiements = async () => {
    setModePaiements(await getModePaiements());
  }

  useEffect(() => {
    get_produits();
    get_panier_id();
    get_devises();
    get_mode_paiements();
  }, []);

  const ajouterAuPanier = () => {
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
        prixTotalTTC: null,
        designation: null,
        teneur: null,
        modePaiementId: null,
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

  const traiterVente = async () => {
    if (clientSelected || fournisseurSelected || agentSelected) {
      client.nom = "";
      client.tel = "";
    }
    
    if (detailsPanier.length === 0 || !paiement.deviseId || !paiement.modePaiementId || (!clientSelected && !fournisseurSelected && !agentSelected && !client.nom)) {
      toast({
        title: "Erreur",
        description:
          "Veuillez remplir les informations client et ajouter des produits",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Générer un numéro de commande unique
    const numeroCommande = `VTE-${Date.now()}`;

    // Créer les données de vente
    const venteData = {
      id: numeroCommande,
      date: new Date().toISOString().split("T")[0],
      client: client.nom,
      tel: client.tel,
      email: "",
      adresseLivraison: client.adresseLivraison,
      produits: detailsPanier.map((p) => ({
        // nom: , //
        quantite: p.qtte,
        prixUnitaire: p.prixUnitaire,
        total: p.prixTotalHT,
      })),
      total: totalVente,
      statut: "payee",
      notes: notes,
    };

    paiement.montant = prixTotalConverti;

    if (clientSelected) client.clientSelectedId = clientSelected.id
    if (agentSelected) client.agentSelectedId = agentSelected.id
    if (fournisseurSelected) client.fournisseurSelectedId = fournisseurSelected.id    

    if (panierId) {
      setResponse(await createVente(
        panierId, 
        detailsPanier, 
        client, 
        paiement
      ));
    }

    // Simulation du traitement
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (response && response.error) {
      toast({
        title: "Erreur",
        description:
          response.error,
        variant: "destructive",
      });
    } 

    // Générer le reçu et la facture
    // const formattedData = formatCommandeForPDF(venteData);
    // generateBonCommande(formattedData); // Reçu pour le client
    // generateFacture(formattedData); // Facture pour la comptabilité

    if (response && response.message && response.data) {
      toast({
        title: `${response.message}`,
        description: (
        <>
          Visualisez la vente avant l'impression.
          <br />
          <a href={`/caissier/ventes/${response.data}`} className="text-green-700 underline ml-1">
            Voir le document.
          </a>
        </>
        ),
      });
    }

    // Reset du formulaire
    setClient({
      nom: "",
      tel: "",
      dateLivraison: "",
      adresseLivraison: "",
      clientSelectedId: null,
      agentSelectedId: null,
      fournisseurSelectedId: null
    });
    setClientSelected(undefined);
    setAgentSelected(undefined);
    setFournisseurSelected(undefined);
    setDetailsPanier([]);
    // setNotes("");
    setIsProcessing(false);
  };

  const getClient = (client: Client | undefined) => {
    setClientSelected(client);
  }

  const getFournisseur = (fournisseur: Fournisseur | undefined) => {
    setFournisseurSelected(fournisseur);
  }

  const getAgent = (agent: Agent | undefined) => {
    setAgentSelected(agent);
  }

  return (
    <CaissierLayout breadcrumbs={[{ label: "Nouvelle Vente" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nouvelle Vente</h1>
          <p className="text-muted-foreground">
            Enregistrer une nouvelle transaction
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
            {/* <Card>
              <CardHeader>
                <CardTitle>Notes (optionnel)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes sur la vente..."
                />
              </CardContent>
            </Card> */}
          </div>

          <div className="space-y-6">  
            {/* Informations client */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="nom">Nom du client *</Label>
                  <Input
                    id="nom"
                    disabled={!!clientSelected || !!fournisseurSelected || !!agentSelected}
                    value={client.nom}
                    onChange={(e) =>
                      setClient({ ...client, nom: e.target.value })
                    }
                    placeholder="Nom complet du client"
                  />
                </div>
                <div>
                  <Label htmlFor="tel">Téléphone *</Label>
                  <Input
                    id="tel"
                    disabled={!!clientSelected || !!fournisseurSelected || !!agentSelected}
                    value={client.tel}
                    onChange={(e) =>
                      setClient({ ...client, tel: e.target.value })
                    }
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
                {/* <div>
                  <Label htmlFor="tel">Date de livraison *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={client.dateLivraison}
                    onChange={(e) =>
                      setClient({ ...client, dateLivraison: e.target.value })
                    }
                  />
                </div> */}
                <div>
                  <Label htmlFor="AdresseLivraison">Adresse de livraison *</Label>
                  <Textarea
                    id="adresseLivraison"
                    // disabled={!!clientSelected || !!fournisseurSelected || !!agentSelected}
                    value={client.adresseLivraison}
                    className="resize-none"
                    onChange={(e) =>
                      setClient({ ...client, adresseLivraison: e.target.value })
                    }
                    placeholder="Adresse de livraison"
                  />
                </div>

                <div>
                  {clientSelected && <div><span>Client Séléctionné : </span><strong className="text-green-600">{clientSelected && clientSelected?.nom_complet.length > 15 ?clientSelected.nom_complet.slice(0,1).toUpperCase()+clientSelected.nom_complet.slice(1,15)+'...' : (clientSelected?.nom_complet?.slice(0,1).toUpperCase() ?? '') + (clientSelected?.nom_complet?.slice(1) ?? '')}</strong></div>}
                  {fournisseurSelected && <div><span>Fournisseur Séléctionné : </span><strong className="text-green-600">{fournisseurSelected && fournisseurSelected?.nom.length > 15 ?fournisseurSelected.nom.slice(0,1).toUpperCase()+fournisseurSelected.nom.slice(1,15)+'...' : (fournisseurSelected?.nom?.slice(0,1).toUpperCase() ?? '') + (fournisseurSelected?.nom?.slice(1) ?? '')}</strong></div>}
                  {agentSelected && <div><span>Agent Séléctionné : </span><strong className="text-green-600">{agentSelected && agentSelected?.nom_complet.length > 15 ?agentSelected.nom_complet.slice(0,1).toUpperCase()+agentSelected.nom_complet.slice(1,15)+'...' : (agentSelected?.nom_complet?.slice(0,1).toUpperCase() ?? '') + (agentSelected?.nom_complet?.slice(1) ?? '')}</strong></div>}
                  <AcheteurDialog getClient={getClient} getFournisseur={getFournisseur} getAgent={getAgent} />
                </div>
              </CardContent>
            </Card>

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
                  onClick={traiterVente}
                  disabled={
                    isProcessing ||
                    (!clientSelected && !fournisseurSelected && !agentSelected && !client.nom) ||
                    detailsPanier.length === 0 ||
                    !paiement.deviseId || !paiement.modePaiementId
                  }
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isProcessing ? "Traitement en cours..." : "Valider la Vente"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CaissierLayout>
  );
}
