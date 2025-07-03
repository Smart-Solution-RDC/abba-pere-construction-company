


"use client";


import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AchatPrint, Entreprise, VentePrint } from "@/prisma/defs-front";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { printVente } from "@/actions/vente";
import { printAchat } from "@/actions/achats";


export default function Historique() {
    const params = useParams();
    const id = params?.id as string | undefined;
    const type = params?.type as string | undefined;

    useEffect(() => {
        if (!type) {
            const searchParams = new URLSearchParams(window.location.search);
            const typeParam = searchParams.get('type');
            if (typeParam) {
                (params as any).type = typeParam;
            }
        }
    }, [id]);

    const [idLoading, setIsLoading] = useState();
    const [vente, setVente] = useState<VentePrint>();
    const [achat, setAchat] = useState<AchatPrint>();

    const get_datas = async () => {
        if (id) {
            if (type == 'vente') setVente(await printVente (id));
            if (type == 'achat') setAchat(await printAchat (id));
        }
    }

    const handlePrint = () => {
        window.print();
    }

    useEffect(() => {
        get_datas();
    }, [id]); 

    return (
        <div>
            {/* Facture achat */}
            {achat?.entreprise && <div style={{margin: '20px'}} className="my-4">
                {/* Enreprise Informations */}
                
                <div style={{textAlign: "center", fontSize: "12px"}}>
                    <h3 style={{fontSize: 'bold'}}>{achat.entreprise.raison_sociale}</h3>
                    <div><span>RCCM : {achat.entreprise.rccm}, ID. Nat. : {achat.entreprise.identification_nationale}</span></div>
                    <div><span>Adresse : {achat.entreprise.Adresse.map((a, i) => <span key={i}>{a.adresse}</span>)}</span></div>
                    <div><span>Email : {achat.entreprise.email}, Tél : {achat.entreprise.Contact.map((a, i) => <span key={i}>{a.tel}</span>)}</span></div>
                </div>
                
                <hr style={{marginTop: '10px', marginBottom: '10px'}} />
                
                <div style={{textAlign: "center", fontSize: "12px"}}>
                    <div><span>ID : ACH-{achat.id}, Caissier : {achat.enregistrerPar}</span></div>
                    <div><span>Enregistrer Par : {achat?.agent && achat.agent !== null && achat.agent.nom_complet && achat.agent.nom_complet
                                                    }, Date : {vente?.updatedAt}</span></div>
                </div>

                <div style={{textAlign: 'center', textDecoration: 'underline'}}><span>Facture</span></div>

                <hr style={{marginTop: '10px', marginBottom: '10px'}} />

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
                        {achat.panier?.detailPaniers.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{data?.produit.designation}</TableCell>
                            <TableCell>{data?.qtte}</TableCell>
                            <TableCell>{data?.devise.symbole}{data?.prixUnitaire}</TableCell>
                            <TableCell className="capitalize">{data?.fournisseur?.nom}</TableCell>
                            <TableCell className="text-right">{data?.devise.symbole}{data?.prixTotalHT}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5}>Prix Total</TableCell>
                                {achat?.paiements.map((paiement, index) => <TableCell className="text-right" key={index}>{paiement.devise.symbole}{paiement.montant}</TableCell>)}
                        </TableRow>
                    </TableFooter>
                </Table>

                <span style={{fontSize: '12px'}}>Mode de paiement : 
                    {achat && achat?.paiements.map((paiement, index) => <span key={index}>{paiement.modePaiement.type}</span>)}
                </span>

                <div style={{textAlign: "center", marginTop: '10px'}}><span style={{fontSize: '12px'}}>Construis ton héritage avec APCC SARLU</span></div>
                <div>
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
            </div>}
            
            {/* Facture de vente */}
            {vente?.entreprise && <div style={{margin: '20px'}} className="my-4">
                {vente?.entreprise && <div style={{textAlign: "center", fontSize: "12px"}}>
                    <h3 style={{fontSize: 'bold'}}>{vente.entreprise.raison_sociale}</h3>
                    <div><span>RCCM : {vente.entreprise.rccm}, ID. Nat. : {vente.entreprise.identification_nationale}</span></div>
                    <div><span>Adresse : {vente.entreprise.Adresse.map((a, i) => <span key={i}>{a.adresse}</span>)}</span></div>
                    <div><span>Email : {vente.entreprise.email}, Tél : {vente.entreprise.Contact.map((a, i) => <span key={i}>{a.tel}</span>)}</span></div>
                </div>}

                <div style={{textAlign: "center", fontSize: "12px"}}>
                    <div><span>ID : VEN-{vente.id}, Caissier : {vente.enregistrerPar}</span></div>
                    <div><span>Client : {vente.nom
                                        ? vente.nom
                                        : vente?.client && vente.client !== null && vente.client.nom_complet
                                            ? vente.client.nom_complet
                                            : vente?.agent && vente.agent !== null && vente.agent.nom_complet
                                                ? vente.agent.nom_complet
                                                : vente?.fournisseur && vente.fournisseur !== null && vente.fournisseur.nom
                                                    ? vente.fournisseur.nom
                                                    : 'Non Défini'}, Date : {vente?.updatedAt}</span></div>
                </div>        

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

                <span style={{fontSize: '12px'}}>Mode de paiement : 
                    {vente && vente?.paiements.map((paiement, index) => <span key={index}>{paiement.modePaiement.type}</span>)}
                </span>
            </div>}
            {!achat?.entreprise || vente?.entreprise && <p>chargement...</p> }
        </div>
    );
}

