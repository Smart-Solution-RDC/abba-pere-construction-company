"use client";

import { findUniqueAchat } from "@/actions/achats";
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
import { AchatUnique } from "@/prisma/defs-front";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Printer } from "lucide-react";
import { FormLogistique } from "@/components/Form-Logistique";
import { AlerteSuppression } from "@/components/delete-alert";
import { useRouter } from "next/navigation";


export default function Historique() {
    const params = useParams();
    const id = params?.id as string | undefined;

    const [idLoading, setIsLoading] = useState();
    const [datas, setDatas] = useState<AchatUnique>();

    const get_datas = async () => {
        if (id) setDatas(await findUniqueAchat(id));
    }

    const router = useRouter();
    const callUpdateVente = () => {
        router.push(`/caissier/nouvel-achat?id=${id}`);
    }

    const callPrintPage = () => {
        router.push(`${id}/print?type=achat`);
    }

    useEffect(() => {
        get_datas();
    }, [id]); 

    return (
        <CaissierLayout breadcrumbs={[{ label: "Historique" }]}>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Achat</h1>
                    <p className="text-muted-foreground">
                        Déscription de l'approvisionnement.
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
                                        <TableHead>Fournisseur</TableHead>
                                        <TableHead className="text-right">Prix Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {datas && datas.panier?.detailPaniers.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>{data?.produit.designation}</TableCell>
                                        <TableCell>{data?.qtte}</TableCell>
                                        <TableCell>{data?.devise.symbole}{data?.prixUnitaire}</TableCell>
                                        <TableCell>{data?.fournisseur.nom}</TableCell>
                                        <TableCell className="text-right">{data?.devise.symbole}{data?.prixTotalHT}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={5}>Prix Total</TableCell>
                                            {datas?.paiements.map((paiement, index) => <TableCell className="text-right" key={index}>{paiement.devise.symbole}{paiement.montant}</TableCell>)}
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                    </Card>

                    <FormLogistique/>
                    
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations de l'achat</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm">Statut</span> <span className="text-sm">{datas?.statut}</span>
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
                            </div>
                            
                            <div className="flex">
                                <Button 
                                    size="icon" 
                                    variant="outline"
                                    className="mr-2 text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"
                                    onClick={ callUpdateVente }
                                >
                                    <Pencil />
                                </Button>
                                <AlerteSuppression venteId={id} />
                                <Button 
                                    variant="outline"
                                    size="icon"
                                    className="text-green-500 bg-transparent hover:bg-transparent active:bg-transparent"                                    
                                    onClick={ callPrintPage }
                                >
                                    <Printer/>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
        </CaissierLayout>
    );
}
  