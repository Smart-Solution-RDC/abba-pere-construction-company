"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AdminLayout } from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Search, Edit, Trash2, Eye, DollarSign, TrendingUp, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { createDevise, deleteDevise, getSingleDevise, getAllDevises, getDevises, updateDevise } from "@/actions/devises"
import { Devise } from "@/app/generated/prisma"
import { AlerteSuppressionDevise } from "@/components/delete-alert-devise"
import { Response } from "@/prisma/defs-front"

export default function DevisesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingDevise, setEditingDevise] = useState<Devise | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    code: "",
    nom: "",
    symbole: "",
    tauxDEchange: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [devises, setDevises] = useState<Devise[] | undefined>();
  const getAllDevises = async () => {
    setDevises(await getDevises());
  }

  let [response, setResponse] = useState<Response>();
  const getNewDevises = (d: Devise[]) => {
  //   setDevises(d);
    console.log(d)
  }

  useEffect(() => {
    getAllDevises();
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'enregistrement
    if (!editingDevise) {
      response = await createDevise({
        ...formData,
        tauxDEchange: Number(formData.tauxDEchange),
      });
    }

    if (editingDevise) {
      const id = editingDevise.id;
      response = await updateDevise(id, {
        ...formData,
        tauxDEchange: Number(formData.tauxDEchange),
      });

      if (response && response.message && response.data) {
        toast({
        title: "La devise a été modifié !",
          description: response.message
            // ? "Les informations de la devise ont été mises à jour"
            // : "La nouvelle devise a été ajoutée avec succès",
        });
      }

      if (response && response.error) {
        toast({
        title: "Erreur !",
          description: response.error,
          variant: "destructive"
            // ? "Les informations de la devise ont été mises à jour"
            // : "La nouvelle devise a été ajoutée avec succès",
        });
      }
    }

    if (response && response.message && response.data) {
      toast({
      title: "Devise ajoutée",
        description: response.message
          // ? "Les informations de la devise ont été mises à jour"
          // : "La nouvelle devise a été ajoutée avec succès",
      });
      
      if (Array.isArray(response.data)) {
        setDevises(response.data);
      }
    }    

    // Reset form
    setFormData({
      code: "",
      nom: "",
      symbole: "",
      tauxDEchange: "",
    })
    setEditingDevise(null)
    setIsModalOpen(false)
    setIsSubmitting(false);
  }

  const handleEdit = (devise: Devise) => {
    setEditingDevise(devise);
    setFormData({
      code: devise.code,
      nom: devise.nom,
      symbole: devise.symbole,
      tauxDEchange: devise.tauxDEchange.toString(),
      // description: devise.description,
    })
    setIsModalOpen(true)
  }

  return (
    <AdminLayout breadcrumbs={[{ label: "Gestion" }, { label: "Devises" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gestion des Devises</h1>
            <p className="text-muted-foreground">Gérez les devises et taux de change</p>
          </div>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingDevise(null)
                  setFormData({
                    code: "",
                    nom: "",
                    symbole: "",
                    tauxDEchange: "",
                  })
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Nouvelle Devise
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{editingDevise ? "Modifier la Devise" : "Nouvelle Devise"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="code">Code Devise *</Label>
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                      placeholder="ex: USD, EUR, CDF"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="symbole">Symbole *</Label>
                    <Input
                      id="symbole"
                      value={formData.symbole}
                      onChange={(e) => setFormData({ ...formData, symbole: e.target.value })}
                      placeholder="ex: $, €, CDF"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    placeholder="ex: Dollar Américain, Euro"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="tauxDEchange">Taux de Change *</Label>
                  <Input
                    id="tauxDEchange"
                    type="number"
                    step="0.000001"
                    value={formData.tauxDEchange}
                    onChange={(e) => setFormData({ ...formData, tauxDEchange: e.target.value })}
                    placeholder="Taux par rapport à la devise principale"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Taux de conversion par rapport à la devise principale
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Information :</h4>
                  <p className="text-sm text-yellow-700">
                    Le taux de change indique combien d'unités de cette devise équivalent à 1 unité de la devise
                    principale. Par exemple, si 1 USD = 3000 CDF, le taux pour USD sera 0.00034.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                    Annuler
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="flex-1">
                    {isSubmitting ? "Enregistrement..." : editingDevise ? "Modifier" : "Ajouter"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Devises</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{devises && devises.length}</div>
              <p className="text-xs text-muted-foreground">Devises configurées</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Devises Actives</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">En utilisation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Devise Principale</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Devise Prinvipale</div>
              <p className="text-xs text-muted-foreground">Devise Principale</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux Moyen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
              </div>
              <p className="text-xs text-muted-foreground">Taux de change moyen</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Recherche */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher une Devise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des Devises</CardTitle>
            <CardDescription>Toutes les devises et leurs taux de change</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Symbole</TableHead>
                  <TableHead>Taux de Change</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devises && devises.map((devise) => (
                  <TableRow key={devise.id}>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        {devise.code}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium capitalize">{devise.nom}</div>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono text-lg">{devise.symbole}</span>
                    </TableCell>
                    <TableCell>
                      {devise.tauxDEchange}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(devise)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlerteSuppressionDevise id={devise.id} getDevises={getAllDevises} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
