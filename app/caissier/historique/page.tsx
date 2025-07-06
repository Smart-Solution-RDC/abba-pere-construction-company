"use client";

import { getHistorique } from "@/actions/historique";
import { RapportJournalier } from "@/actions/vente";
import { CaissierLayout } from "@/components/CaissierLayout";
import { DashboardHistorique } from "@/components/dashboard-historique";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { HistoriqueFormatData, Rapports } from "@/prisma/defs-front";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Historique() {
  const [idLoading, setIsLoading] = useState();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [datas, setDatas] = useState<HistoriqueFormatData | undefined>();
  
  const get_datas = async () => {
    setDatas(await getHistorique());
  }

  useEffect(() => {
    get_datas();
  }, []);

  return (
    <CaissierLayout breadcrumbs={[{ label: "Historique" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Historique</h1>
          <p className="text-muted-foreground">
            Historique des achats, ventes et commandes.
          </p>
        </div>

        <DashboardHistorique />

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

          {/* Historique des ventes et achats */}
          {datas && <Card>
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
                  {datas && datas.map((data, i) => (
                    <TableRow key={i}>
                      {data.achat && <TableCell className="font-medium">
                        <Link className="underline text-green-600" href={`historique/achats/${data.achat.id}`}>
                          {`ACH-${data.achat.id}`}
                        </Link>
                      </TableCell>}
                      {data.vente && <TableCell className="font-medium">
                        <Link className="underline text-green-600" href={`historique/ventes/${data.vente.id}`}>
                          {`VEN-${data.vente.id}`}
                        </Link>
                      </TableCell>}
                      {data.commande && <TableCell className="font-medium">
                        <Link className="underline text-green-600" href={`historique//commandes/${data.commande.id}`}>
                          {`COM-${data.commande.id}`}
                        </Link>
                      </TableCell>}
                      {data.achat && <TableCell>{data.achat.statut}</TableCell>}
                      {data.vente && <TableCell>{data.vente.statut}</TableCell>}
                      {data.commande && <TableCell>{data.commande.statut}</TableCell>}
                      {data.vente && <TableCell>{data.modePaiement.type}</TableCell>}
                      {data.vente && <TableCell>{data.devise.symbole}{data.montant}</TableCell>}
                      {data.achat && <TableCell>{data.modePaiement.type}</TableCell>}
                      {data.achat && <TableCell>{data.devise.symbole}{data.montant}</TableCell>}
                      {data.achat && <TableCell>{data.achat.updatedAt}</TableCell>}
                      {data.vente && <TableCell>{data.vente.updatedAt}</TableCell>}
                      {data.commande && <TableCell>{data.commande.updatedAt}</TableCell>}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>}
          
      </div>
    </CaissierLayout>
  );
}
 