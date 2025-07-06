"use client";

import { useEffect, useState } from "react";
import { ClientLayout } from "@/components/ClientLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { AchatClientFormat } from "@/prisma/defs-front";
import { getClientAchats } from "@/actions/achats";
import Link from "next/link";

export default function AchatClientPage() {
    const [achats, setAchats] = useState<AchatClientFormat[] | undefined>();
    const [search, setSearch] = useState(''); 
    const getAllAchats = async () => {
      setAchats(await getClientAchats());
    } // setAchats

    useEffect(() => {
        getAllAchats();
    }, []);

  return (
    <ClientLayout breadcrumbs={[{ label: "Achats" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Historique des achats</h1>
          <p className="text-muted-foreground">
            Visualisez les achats passés.
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
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium"></CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Mode de Paiement</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {achats && achats.map((achat, i) =>
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                        <Link className="underline text-green-600" href={`achats/${achat.id}`}>
                            {`ACH-${achat.id}`}
                        </Link>
                        </TableCell>
                        <TableCell>{achat.statut}</TableCell>
                        <TableCell>{achat.paiements.map((a, i) => <span key={i}>{a.modePaiement.type}</span>)}</TableCell>
                        <TableCell>{achat.paiements.map((a, i) => <span key={i}>{a.montant}{a.devise.symbole}</span>)}</TableCell>
                        <TableCell>{achat.updatedAt}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </ClientLayout>
  );
}
  