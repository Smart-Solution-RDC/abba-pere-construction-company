"use client";

import { useEffect, useState } from "react";
import { ClientLayout } from "@/components/ClientLayout";
import { getCommandes } from "@/actions/commandes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Commande, CommandeUnique } from "@/prisma/defs-front";
import Link from "next/link";
import { getUniqueClientCommande } from "@/actions/achats";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Pencil, Printer } from "lucide-react";

export default function CommandeUniquePage() {
    const params = useParams();
    const id = params?.id as string | undefined;
    const [commande, setCommande] = useState<CommandeUnique>();
    let prixTotal = 0;

    const getUniqueCommande = async () => {
        if (id) setCommande(await getUniqueClientCommande(id));
    }

    const router = useRouter();
    const callUpdateCommande = (id: string | undefined) => {
        if (id) router.push(`/client/nouvelle-commande?id=${id}`);
    } 

    const callPrintPage = (id: string | undefined) => {
        if (id) router.push(`${id}/print`);
    }

    useEffect(() => {
        getUniqueCommande();
        if (commande) {
                for (let i = 0; i < commande.panier.detailPaniers.length; i++) {
                    const detail = commande.panier.detailPaniers[i];
                    prixTotal += detail.prixTotalHT;
                    console.log(detail.prixTotalHT)
                }
            }
    }, [id]);

  return (
    <ClientLayout breadcrumbs={[{ label: "Commandes" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Commande</h1>
          <p className="text-muted-foreground">
            La déscription de la commande.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Les détails</CardTitle>
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
                                {commande && commande?.panier?.detailPaniers.map((data, index) => (
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
                                        <TableCell className="text-right">{commande?.prix.devise} {commande?.prix.prixTotal}</TableCell>
                                </TableRow>
                            </TableFooter>
                            </Table>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Informations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-sm">Statut</span>
                            <span className="text-sm">{commande?.statut}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Adresse de Livraison</span> 
                            <span className="text-sm capitalize">{commande?.adresseLivraison ? commande.adresseLivraison : 'Non Définie'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Date de Livraison</span> 
                            <span className="text-sm capitalize">{commande?.dateLivraison ? commande.dateLivraison : 'Non Définie'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Date de création</span>
                            <span className="text-sm">{commande?.createdAt}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Dernier mis à jour</span>
                            <span className="text-sm">{commande?.updatedAt}</span>
                        </div>
                        <div>
                            <span className="text-sm">Notes</span> 
                            <div>
                                <span className="text-sm capitalize">{commande?.notes ? commande.notes : ''}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <Button 
                                size="icon" 
                                variant="outline"
                                className="mr-2 text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"
                                onClick={ () => callUpdateCommande(id)}
                            >
                                <Pencil />
                            </Button>
                            {/* <AlerteSuppression venteId={id} /> */}
                            <Button 
                                variant="outline"
                                size="icon"
                                className="text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"                                    
                                onClick={ () => callPrintPage(id) }
                            >
                                <Printer/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {commande && commande.acheteurTiers && <Card>
                    <CardHeader>
                        <CardTitle>Acheteur Tiers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-sm">Nom</span>
                            <span className="text-sm capitalize">{commande?.acheteurTiers.nom} {commande?.acheteurTiers.postnom}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Téléphone</span>
                            <span className="text-sm">{commande?.acheteurTiers.tel}</span>
                        </div>
                    </CardContent>
                </Card>}

            </div>
        </div>             
      </div>
    </ClientLayout>
  );
}
  