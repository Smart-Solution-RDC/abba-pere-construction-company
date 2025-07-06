"use client";

import { useEffect, useState } from "react";
import { ClientLayout } from "@/components/ClientLayout";
import { getCommandes } from "@/actions/commandes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Commande } from "@/prisma/defs-front";
import Link from "next/link";

export default function NouvelleVentePage() {
    const [commandes, setCommandes] = useState<Commande[]>();
    const [search, setSearch] = useState(''); 
    const getAllCommandes = async () => {
        setCommandes(await getCommandes());
    }

    useEffect(() => {
        getAllCommandes();
    }, []);

  return (
    <ClientLayout breadcrumbs={[{ label: "Commandes" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Historique des commandes</h1>
          <p className="text-muted-foreground">
            Visualisez les commandes enregistrées
          </p>
        </div>

        <div className="flex justify-between align-baseline">
          <div>
            <Input 
              type="search" 
              placeholder="Recherche"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          
          <div></div>
        </div>

        <Card>
            <CardHeader>
                {/* <CardTitle>La liste des commandes</CardTitle> */}
            </CardHeader>
            <CardContent className="space-y-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">N°</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Stock réservé</TableHead>
                            <TableHead>Date de Livraison</TableHead>
                            <TableHead className="text-center">Montant</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {commandes && commandes.map((c, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium underline text-green-500">
                                    <Link href={`commandes/${c.id}`}>{`COM-${c.id}`}</Link>
                                </TableCell>
                                <TableCell>{c.statut}</TableCell>
                                <TableCell>{c.estReserve ? 'Réservé' : 'Pas réservé'}</TableCell>
                                <TableCell>{c.dateDeLivraison ?? '-'}</TableCell>
                                <TableCell className="text-center">{c.prix?.prixTotal}{c.prix?.symbole}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                    </Table>
            </CardContent>
        </Card>        
      </div>
    </ClientLayout>
  );
}
 