'use client'

import { getClientUniqueAchat } from "@/actions/achats";
import { ClientLayout } from "@/components/ClientLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AchatUniqueClient } from "@/prisma/defs-front";
import { Pencil, Printer } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AchatClientUnique () {
    const params = useParams();
    const id = params?.id as string | undefined;
    const [achat, setAchat] = useState<AchatUniqueClient>();

    const getAchat = async () => {
        if (id) setAchat(await getClientUniqueAchat(id));
    }

    useEffect(() => {
        getAchat();
    }, [id]);

    return <ClientLayout breadcrumbs={[{ label: "Achat" }]}>
          <div className="space-y-6">
                {/* Header */}
                <div>
                <h1 className="text-3xl font-bold tracking-tight">Détails de l'achat</h1>
                <p className="text-muted-foreground">
                    Voir la déscription de l'achat.
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                {/* <CardTitle>Les détails de la vente</CardTitle> */}
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
                                        {achat && achat.panier?.detailPaniers.map((data, index) => (
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
                                                <TableCell className="text-right">{achat?.paiements.map((paiement, index) => <span className="text-right" key={index}>{paiement.devise.symbole}{paiement.montant}</span>)}</TableCell>
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
                                    <span className="text-sm">Statut</span> <span className="text-sm">{achat?.statut}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Adresse de Livraison</span> 
                                    <span className="text-sm capitalize">{achat?.adresseLivraison ? achat.adresseLivraison : 'Non Définie'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Date de Livraison</span> 
                                    <span className="text-sm capitalize">{achat?.dateLivraison ? achat.dateLivraison : 'Non Définie'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Mode de Paiement</span>{achat?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.modePaiement.type}</span>)}
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Date de création</span><span className="text-sm">{achat?.createdAt}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Dernier mis à jour</span><span className="text-sm">{achat?.updatedAt}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Enregistrer par</span><span className="capitalize text-sm">{achat?.enregistrerPar}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Notes</span> 
                                    <div>
                                        <span className="text-sm capitalize">{achat?.notes ? achat.notes : ''}</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    {/* <Button 
                                        size="icon" 
                                        variant="outline"
                                        className="mr-2 text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"
                                        onClick={ callUpdateVente }
                                    >
                                        <Pencil />
                                    </Button> */}
                                    {/* <AlerteSuppression venteId={id} /> */}
                                    <Button 
                                        variant="outline"
                                        // size="icon"
                                        className="text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"                                    
                                        // onClick={ callPrintPage }
                                    >
                                        <Printer/> Imprimer
                                    </Button>
                                </div>
                            </CardContent>
                        </Card> 
                    </div>
                </div>
            </div>
        </ClientLayout>
}

