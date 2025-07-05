'use client'

import { AdminLayout } from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Eye, Edit, Trash2, Package } from "lucide-react"
import { useEffect, useState } from "react"
import { createProduit, getProduits } from "@/actions/produits"
import { Produit, ProduitForm, Response, types } from "@/prisma/defs-front"
import { Label } from "@/components/ui/label"
import { Devise, Teneur } from "@/app/generated/prisma"
import { getAllTeneurs } from "@/actions/teneurs"
import { getDevises } from "@/actions/devises"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AlerteSuppressionProduit } from "@/components/delete-alert-produit"

export default function ProduitsPage() {
  
  const [produits, setProduits] = useState<Produit[]>();
  const getAllProduits = async () => {
    setProduits(await getProduits());
  }

  const [teneurs, setTeneurs] = useState<Teneur[]>();
  const getTeneurs = async () => {
    setTeneurs(await getAllTeneurs());
  }

  const [devises, setDevises] = useState<Devise[]>();
  const getAllDevises = async () => {
    setDevises(await getDevises());
  }
  
  const [produit, setProduit] = useState({
    designation: '',
    typeProduit: '',
    autresType: '',
    teneurId: '',
    deviseId: '',
    prixUnitaire: '',
    description: ''
  });

  let [response, setResponse] = useState<Response>();
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); 
      setIsDisabled(true);
      if (produit.typeProduit !== 'CIMENT') {
        produit.teneurId = ''
      }
      
     response = await createProduit(produit)
     console.log(response);

     if (response && response.error) {
      toast({
        title: "Erreur!",
        description:
          response.error,
        variant: "destructive",
      });
     }

     if (response && response.message && response.data) {
      toast({
        title: "Réussite !",
        description:
          response.message,
        // variant: "destructive",
      });
      setProduit({
        designation: '',
        typeProduit: '',
        autresType: '',
        prixUnitaire: '',
        deviseId: '',
        teneurId: '',
        description: ''
      });
      setProduits(response.data)
     }
    
     setIsDisabled(false);
  }

  useEffect(() => {
    getTeneurs();
    getAllProduits();
    getAllDevises();
  }, []);

  return (
    <AdminLayout breadcrumbs={[{ label: "Produits" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gestion des Produits</h1>
            <p className="text-muted-foreground">Gérez votre catalogue de produits</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouveau Produit
          </Button>
        </div>

        {/* Formulaire */}
        <Card>
          <CardHeader>
            <CardTitle>Formulaire</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="designation">Désignation du Produit</Label>
                  <Input
                    id="designation"
                    value={produit?.designation}
                    onChange={(e) => setProduit({...produit, designation: e.target.value })}
                    placeholder="Désignation"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="typeProduit">Type de Produit</Label>
                  <Select
                      value={produit?.typeProduit}
                      onValueChange={(value) =>
                        setProduit({...produit, typeProduit: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {types.map((type) => (
                          <SelectItem key={type.value} className="capitalize" value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>
              </div>
              
              {produit.typeProduit == 'CIMENT' && <div>
                <div>
                  <Label htmlFor="tenuer">Le teneur</Label>
                  <Select
                      value={produit?.teneurId ? String(produit.teneurId) : undefined}
                      onValueChange={(value) =>
                        setProduit({...produit, teneurId: value})
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {teneurs && teneurs.map((teneur) => (
                          <SelectItem key={teneur.id} value={String(teneur.id)}>
                            {teneur.valeur}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>
              </div>}

              {produit.typeProduit == 'AUTRES' && <div>
                  <Label htmlFor="autreType">Autre type</Label>
                  <Input
                    id="autreType"
                    min={1}
                    value={produit?.autresType}
                    onChange={(e) =>
                      setProduit({ ...produit, autresType: e.target.value })
                    }
                    placeholder="Autre type"
                    required
                  />
                </div>}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prixUnitaire">Prix Unitaire</Label>
                  <Input
                    id="prixUnitaire"
                    type="number"
                    min={1}
                    value={produit?.prixUnitaire}
                    onChange={(e) =>
                      setProduit({...produit, prixUnitaire: e.target.value })
                    }
                    placeholder="Prix Unitaire"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nom">La dévise</Label>
                  <Select
                      value={produit.deviseId}
                      onValueChange={(value) =>
                        setProduit({ ...produit, deviseId: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {devises && devises.map((devise) => (
                          <SelectItem key={devise.id} value={String(devise.id)}>
                            {devise.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>
              </div>

              <div>
                <Label>Description*</Label>
                <Textarea 
                  className="resise-none" 
                  placeholder="Descripion"
                  value={produit.description}
                  onChange={(e) => 
                    { setProduit({...produit, description: e.target.value}) }
                  }
                ></Textarea>
              </div>
              <div className="grid grid-cols-1">
                <Button disabled={isDisabled}>Enregistrer</Button>
              </div>
            </form>
          </CardContent>
        </Card>        

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filtres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher un produit..." className="pl-8" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tous">Toutes catégories</SelectItem>
                  <SelectItem value="ciment">Ciment</SelectItem>
                  <SelectItem value="mortier">Mortier</SelectItem>
                  <SelectItem value="beton">Béton</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Produits</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{produits.length}</div>
              <p className="text-xs text-muted-foreground">Dans le catalogue</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produits Actifs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{produits.filter((p) => p.statut === "Actif").length}</div>
              <p className="text-xs text-muted-foreground">Disponibles à la vente</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stock Faible</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {produits.filter((p) => p.statut === "Stock Faible").length}
              </div>
              <p className="text-xs text-muted-foreground">Nécessitent réapprovisionnement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ruptures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {produits.filter((p) => p.statut === "Rupture").length}
              </div>
              <p className="text-xs text-muted-foreground">Produits en rupture</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Catalogue des Produits</CardTitle>
            <CardDescription>Tous vos produits et leur état de stock</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Désignation</TableHead>
                    <TableHead>Type Teneur</TableHead>
                    <TableHead>Prix Unitaire</TableHead>
                    <TableHead>En Stock</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {produits && produits.map((produit) => (
                    <TableRow key={produit.id}>
                      <TableCell className="font-medium">{produit.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium capitalize">{produit.designation}</div>
                          <div className="text-sm text-muted-foreground max-w-[200px] truncate">
                            {produit.typeProduit !== 'AUTRES' ? produit.typeProduit : produit.autresType}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{produit.teneur ? produit.teneur.valeur : '-'}</TableCell>
                      <TableCell>{produit.prixUnitaire} {produit.devise.code}</TableCell>
                      <TableCell>{produit.qtteDisponible}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlerteSuppressionProduit id={produit.id} getProduits={getProduits} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
