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
import { convertFormatDate } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function RapportsJournaliers() {
  const [idLoading, setIsLoading] = useState();
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [rapports, setRapports] = useState<Rapports | undefined>();


  const rapports_journaliers = async () => {
    setRapports(await RapportJournalier(null));
    setDate('');
  }

  const fetchSpecifique = async () => {
    setRapports(await RapportJournalier(date));
  }

  useEffect(() => {
    if (date) {
      fetchSpecifique();
    }
  }, [date]);

  useEffect(() => {
    rapports_journaliers();
  }, []);

  return (
    <CaissierLayout breadcrumbs={[{ label: "Rapports" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rapports Journaliers</h1>
          <p className="text-muted-foreground">
            Récuperer tous les rqpports journaliers.
          </p>
        </div>

        <DashboardHistorique />

        <div className="flex justify-between align-baseline">
          <div>
            <Input 
              type="date" 
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <div></div>
        </div>

          {/* Rapport journalier */}
          {rapports &&  <div>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium"></CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">N°</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rapports && rapports.data.map((rapport, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                          {i+1}
                        </TableCell>
                        <TableCell>
                          <Link className="underline text-green-600" href={`rapports/${convertFormatDate(rapport.createdAt)}`}>
                            {rapport.createdAt}
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>}
      </div>
    </CaissierLayout>
  );
}
 