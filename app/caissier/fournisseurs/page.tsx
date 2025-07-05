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
import { ClientDatas, FournisseurDatas, Produit, ProduitForm, Response, types } from "@/prisma/defs-front"
import { Label } from "@/components/ui/label"
import { Client, Devise, Teneur } from "@/app/generated/prisma"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { CaissierLayout } from "@/components/CaissierLayout"
import { createFournisseur, getFournisseurs } from "@/actions/fournisseurs"

export default function ProduitsPage() {
  
  const [fournisseurs, setFournisseurs] = useState<FournisseurDatas>();
  const getAllFournisseurs = async () => {
    setFournisseurs(await getFournisseurs(null));
    // setFournisseurs
  }

  const [form, setForm] = useState({
    email: '',
    nom: '',
    typeProduit: '',
    autresType: '',
    tel: '',
    adresse: ''
  });

  let [response, setResponse] = useState<Response>();
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchSpecifique = async () => {
    setFournisseurs(await getFournisseurs(search));
  }
  const [search, setSearch] = useState('');
    useEffect(() => {
    if (search) {
      fetchSpecifique();
    }
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsDisabled(true);

    response = await createFournisseur(form);

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
      setForm({
        email: '',
        nom: '',
        typeProduit: '',
        autresType: '',
        tel: '',
        adresse: ''
      });
    
      if (fournisseurs) {
        setFournisseurs({ ...fournisseurs, data: [...(fournisseurs?.data || []), response.data] });
      }
    }
     setIsDisabled(false);
  }

  useEffect(() => {
    getAllFournisseurs();
  }, []);

  return (
    <CaissierLayout breadcrumbs={[{ label: "Fournisseurs" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gestion des Fournisseurs</h1>
            <p className="text-muted-foreground">Gérez les informations de vos fournisseurs</p>
          </div>
        </div>

        {/* Formulaire */}
        <Card>
          <CardHeader>
            <CardTitle>Formulaire</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    value={form?.nom}
                    onChange={(e) =>
                      setForm({...form, nom: e.target.value })
                    }
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                    <div>
                  <Label htmlFor="email">Email (Optionnel)</Label>
                  <Input
                    id="email"
                    value={form?.email}
                    onChange={(e) =>
                      setForm({...form, email: e.target.value })
                    }
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="typeDeProduit">Type de Produit</Label>
                  <Select
                    value={form?.typeProduit}
                      onValueChange={(value) =>
                        setForm({...form, typeProduit: value })
                      }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem className="capitalize" key={type.value} value={String(type.value)}>
                          {type.label} 
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {form.typeProduit == 'AUTRES' && <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="autresType">Autre Produit</Label>
                  <Input
                    id="autresType"
                    value={form?.autresType}
                    onChange={(e) =>
                      setForm({...form, autresType: e.target.value })
                    }
                    placeholder="Autre Type"
                    required
                  />
                </div>
              </div>}

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="tel">Téléphone</Label>
                  <Input
                    id="tel"
                    type="tel"
                    value={form?.tel}
                    maxLength={10}
                    minLength={10}
                    onChange={(e) =>
                      setForm({...form, tel: e.target.value })
                    }
                    placeholder="Téléphone"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="adresse">Adresse</Label>
                  <Input
                    id="adresse"
                    value={form?.adresse}
                    onChange={(e) =>
                      setForm({...form, adresse: e.target.value })
                    }
                    placeholder="Adresse"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <Button disabled={isDisabled}>
                  {!isDisabled ? 'Enregistrement' : 'Traitement...'}
                </Button>
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
                  <Input 
                    placeholder="Rechercher..." 
                    className="pl-8"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                     />
                </div>
              </div>
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
            <CardTitle>Liste des Fournisseurs</CardTitle>
            <CardDescription>Voir la liste des vos fournisseurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type de Produit</TableHead>
                    <TableHead className="text-center">Contact</TableHead>
                    <TableHead className="text-center">Adresse</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fournisseurs && fournisseurs.data.map((c, i) => (
                    <TableRow key={c.id}>
                      <TableCell className="font-medium">{i+1}</TableCell>
                      <TableCell>
                        <Link className="underline capitalize text-green-500" href={`fournisseurs/${c.id}`}>{c.nom}</Link>
                      </TableCell>
                      <TableCell>{c.typeProduit ? c.typeProduit : c.autresTypes}</TableCell>
                      <TableCell className="text-center">{c.contacts.length == 0 ? '-' : c.contacts.map((c, i) => <span key={i}>{c.tel}</span>)}</TableCell>
                      <TableCell className="text-center">{c.adresses.length == 0 ? '-' : c.adresses.map((a, i) => <span key={i}>{a.adresse}</span>)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </CaissierLayout>
  )
}
 