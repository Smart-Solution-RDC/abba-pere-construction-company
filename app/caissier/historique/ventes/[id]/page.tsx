
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
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FormLogistique } from "@/components/Form-Logistique";
import { AlerteSuppression } from "@/components/delete-alert";
import { useRouter } from "next/navigation";


export default function Historique() {
    const params = useParams();
    const id = params?.id as string | undefined;

    const [idLoading, setIsLoading] = useState();
    const [vente, setVente] = useState<VenteUnique>();

    const get_datas = async () => {
        if (id) setVente(await findUniqueVente(id));
    }

    const router = useRouter();
    const callUpdateVente = () => {
        router.push(`/caissier/nouvelle-vente?id=${id}`);
    }

    const callPrintPage = () => {
        router.push(`${id}/print`);        
    }

    useEffect(() => {
        get_datas();
    }, [id]); 

    return (
        <CaissierLayout breadcrumbs={[{ label: "Vente" }]}>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Vente</h1>
                    <p className="text-muted-foreground">
                        Déscription de la vente.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Les détails de la vente</CardTitle>
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

                    <FormLogistique />
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations de la vente</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm">Statut</span> <span className="text-sm">{vente?.statut}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Adresse de Livraison</span> 
                                <span className="text-sm capitalize">{vente?.adresseLivraison ? vente.adresseLivraison : 'Non Définie'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Date de Livraison</span> 
                                <span className="text-sm capitalize">{vente?.dateLivraison ? vente.dateLivraison : 'Non Définie'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Mode de Paiement</span>{vente?.paiements.map((paiement, index) => <span className="text-sm" key={index}>{paiement.modePaiement.type}</span>)}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Date de création</span><span className="text-sm">{vente?.createdAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Dernier mis à jour</span><span className="text-sm">{vente?.updatedAt}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Enregistrer par</span><span className="capitalize text-sm">{vente?.enregistrerPar}</span>
                            </div>
                            <div>
                                <span className="text-sm">Notes</span> 
                                <div>
                                    <span className="text-sm capitalize">{vente?.notes ? vente.notes : ''}</span>
                                </div>
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

                    <Card>
                        <CardHeader>
                            <CardTitle>Informations du client</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-sm">Nom</span> 
                                <span className="text-sm capitalize">
                                    {
                                        vente?.nom
                                            ? vente.nom
                                            : vente?.client && vente.client !== null && vente.client.nom_complet
                                                ? vente.client.nom_complet
                                                : vente?.agent && vente.agent !== null && vente.agent.nom_complet
                                                    ? vente.agent.nom_complet
                                                    : vente?.fournisseur && vente.fournisseur !== null && vente.fournisseur.nom
                                                        ? vente.fournisseur.nom
                                                        : 'Non Défini'
                                    }
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Type de client</span> 
                                {vente?.nom && <span className="text-sm capitalize">ORDINAIRE</span>}
                                {vente?.client && <span className="text-sm capitalize">CLIENT</span>}
                                {vente?.fournisseur && <span className="text-sm capitalize">FOURNISSEUR</span>}
                                {vente?.agent && <span className="text-sm capitalize">AGENT</span>}
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Téléphone</span> 
                                    <span className="text-sm capitalize">
                                        {
                                            vente?.tel
                                                ? vente.tel
                                                : vente?.client && vente.client.contacts && vente.client.contacts.length !== 0
                                                    ? vente.client.contacts.map((c, i) => <span key={i}>{c.tel}</span>)
                                                    : vente?.agent && vente.agent.contacts && vente.agent.contacts.length !== 0
                                                        ? vente.agent.contacts.map((a, j) => <span key={j}>{a.tel}</span>)
                                                            : vente?.fournisseur && vente.fournisseur.contacts && vente.fournisseur.contacts.length !== 0
                                                            ? vente.fournisseur.contacts.map((f, k) => <span key={k}>{f.tel}</span>)
                                                                : 'Non Défini'
                                        }
                                    </span>
                            </div>
                        </CardContent>
                    </Card>  
                </div>
            </div>
            
        </CaissierLayout>
    );
}
   

