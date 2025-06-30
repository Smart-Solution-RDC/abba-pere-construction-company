
"use client";

import { CaissierLayout } from "@/components/CaissierLayout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { VenteUnique } from "@/prisma/defs-front";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Pencil, Printer, Trash } from "lucide-react";
import { findUniqueVente } from "@/actions/vente";


export default function Historique() {
    const params = useParams();
    const id = params?.id as string | undefined;

    const [idLoading, setIsLoading] = useState();
    const [vente, setVente] = useState<VenteUnique>();

    const get_datas = async () => {
        if (id) setVente(await findUniqueVente(id));
    }

    useEffect(() => {
        get_datas();
    }, [id]); 

    return (
        <CaissierLayout breadcrumbs={[{ label: "Vente" }]}>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Description</h1>
                    <p className="text-muted-foreground">
                        Aperçu de la vente.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Les détails de l'achat</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50px]">N°</TableHead>
                                        <TableHead>Désignation</TableHead>
                                        <TableHead>Quantité</TableHead>
                                        <TableHead>Prix Unitaire</TableHead>
                                        <TableHead className="text-right">Prix Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {vente && vente.panier?.detailPaniers.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell>{data?.produit.designation}</TableCell>
                                            <TableCell>{data?.qtte}</TableCell>
                                            <TableCell>{data?.devise.symbole}{data?.prixUnitaire}</TableCell>
                                            <TableCell className="text-right">{data?.devise.symbole}{data?.prixTotalHT}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={4}>Prix Total</TableCell>
                                            {vente?.paiements.map((paiement, index) => <TableCell className="text-right" key={index}>{paiement.devise.symbole}{paiement.montant}</TableCell>)}
                                    </TableRow>
                                </TableFooter>
                                </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations du client</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm">Nom</span> 
                                <span className="text-sm capitalize">{vente?.nom}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Téléphone</span> 
                                <span className="text-sm capitalize">{vente?.tel ? vente.tel : 'Non Défini'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Adresse de Livraison</span> 
                                <span className="text-sm capitalize">{vente?.adresseLivraison ? vente.adresseLivraison : 'Non Défini'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Date de Livraison</span> 
                                <span className="text-sm capitalize">{vente?.dateLivraison ? vente.dateLivraison : 'Non Défini'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Notes</span> 
                                <span className="text-sm capitalize">{vente?.adresseLivraison ? vente.adresseLivraison : 'Non Défini'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Statut</span> 
                                <span className="text-sm capitalize">{vente?.statut}</span>
                            </div>
                            {/* <div className="flex justify-between">
                                <span className="text-sm">Montant</span>{datas?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.devise.symbole}{paiement.montant}</span>)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Mode de Paiement</span>{datas?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.modePaiement.type}</span>)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Date de création</span><span className="text-sm">{datas?.createdAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Dernier mis à jour</span><span className="text-sm">{datas?.updatedAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Enregistrer par</span><span className="capitalize text-sm">{datas?.agent.nom_complet}</span>
                            </div> */}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations de l'achat</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* <div className="flex justify-between">
                                <span className="text-sm">Statut</span> <span className="text-sm">{datas?.statut}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Montant</span>{datas?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.devise.symbole}{paiement.montant}</span>)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Mode de Paiement</span>{datas?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.modePaiement.type}</span>)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Date de création</span><span className="text-sm">{datas?.createdAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Dernier mis à jour</span><span className="text-sm">{datas?.updatedAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Enregistrer par</span><span className="capitalize text-sm">{datas?.agent.nom_complet}</span>
                            </div> */}
                            <div>
                                <Button size="sm" className="bg-green-600 mr-1">
                                    <Pencil />
                                </Button>
                                <Button size="sm" className="bg-green-600 mr-1">
                                    <Download />
                                </Button>
                                <Button size="sm" className="bg-green-600 mr-1">
                                    <Printer/>
                                </Button>
                                <Button size="sm" className="bg-red-500">
                                    <Trash />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
        </CaissierLayout>
    );
}
   

