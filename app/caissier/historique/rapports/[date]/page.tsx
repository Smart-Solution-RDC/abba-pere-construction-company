'use client'

import { findUnique } from "@/actions/entreprise";
import { VentesJournalier } from "@/actions/vente";
import { Entreprise } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RapportDocument } from "@/prisma/defs-front";
import { Printer } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";

export default function RapportJournalierDocument() {
    const params = useParams();
    const date = params?.date as string;

    const [ventes, setVentes] = useState<RapportDocument[]>([]);
    const [entreprise, setEntreprise] = useState<Entreprise>();

    const findDatas = async () => {
        setVentes(await VentesJournalier(date));
        setEntreprise(await findUnique());
    }

    const handlePrint = () => {
        window.print();
    }

    const router = useRouter();
    const getVente = (id: number) => {
        router.push(`/caissier/historique/ventes/${id}`);
    }

    useEffect(() => {
        findDatas();
    }, [date]);


    return <div className="bg-gray-100 absolute w-full h-full p-2 sm:p-8 md:px-28 lg:px-52">
                <div className="bg-white p-10" style={{borderRadius: '4px'}}>
                    <div style={{textAlign: "center", fontSize: "12px"}}>
                    <h3 style={{fontSize: 'bold'}}>{entreprise?.raison_sociale}</h3>
                    <div><span>RCCM : {entreprise?.rccm}, ID. Nat. : {entreprise?.identification_nationale}</span></div>
                    {/* <div><span>Adresse : {entreprise?.Adresse?.map((a, i) => <span key={i}>{a.adresse}</span>)}</span></div> */}
                    <div><span>Email : {entreprise?.email}</span></div>
                 </div>

                <hr style={{marginTop: '10px', marginBottom: '10px'}}></hr>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">ID</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Mode de Paiement</TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ventes.map((vente: RapportDocument, index: number) => (
                        <TableRow key={index} onClick={(id) => getVente(vente.id) } style={{cursor: 'pointer'}}>
                            <TableCell className="font-medium text-green-500 underline" style={{fontSize: '12px'}}>{`VEN-${index+1}`}</TableCell>
                            <TableCell style={{fontSize: '12px'}}>{vente.statut}</TableCell>
                            <TableCell style={{fontSize: '12px'}}>{vente.nom
                                        ? vente.nom
                                        : vente?.client && vente.client !== null && vente.client.nom_complet
                                            ? vente.client.nom_complet
                                            : vente?.agent && vente.agent !== null && vente.agent.nom_complet
                                                ? vente.agent.nom_complet
                                                : vente?.fournisseur && vente.fournisseur !== null && vente.fournisseur.nom
                                                    ? vente.fournisseur.nom
                                                    : 'Non Défini'}</TableCell>
                            <TableCell style={{fontSize: '12px'}} className="capitalize">{vente && vente.paiements.map((paiement, index) => <span key={index}>{paiement.modePaiement.type}</span>)}</TableCell>
                            <TableCell style={{fontSize: '12px'}} className="text-right">{vente && vente.paiements.map((paiement, index) => <TableCell className="text-right" key={index}>{paiement.devise.symbole}{paiement.montant}</TableCell>)}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div style={{textAlign: "center", marginTop: '10px'}}><span style={{fontSize: '12px'}}>Construis ton héritage avec APCC SARLU</span></div>

                <Button 
                    size="sm" 
                    className="bg-green-500 mr-1 
                    hover:bg-green-600 
                    active:bg-green-400"
                    onClick={handlePrint}
                    style={{
                        position: "absolute",
                        top: "85%",
                        right: "3%",
                        color: 'white'
                    }}
                >
                    <Printer/> Imprimer
                </Button>
                </div>
            </div>
}

