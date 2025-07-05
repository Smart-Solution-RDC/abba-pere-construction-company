"use client";

import { getCaisses } from "@/actions/caisses";
import { CaissierLayout } from "@/components/CaissierLayout";
import { NouvelleCaisse } from "@/components/nouvelle-caisse";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Caisse } from "@/prisma/defs-front";
import { Package, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Historique() {
  const [idLoading, setIsLoading] = useState();
  
  const [caisses, setCaisses] = useState<Caisse[] | undefined>();
  
  const getAllCaisses = async () => {
    setCaisses(await getCaisses());
  }

  useEffect(() => {
    getAllCaisses();
  }, []);

  return (
    <CaissierLayout breadcrumbs={[{ label: "Caisses" }]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between item-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Caisse</h1>
            <p className="text-muted-foreground">
              Gérer votre caisse.
            </p>
          </div>

          <div className="mt-2">
            <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nouvelle Caisse
              </Button>
            {/* <NouvelleCaisse /> */}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* {caisses && caisses.map((c, i) =>  */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Solde Actuel</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Link href={''} className="text-2xl font-bold text-green-500 underline">
                800 CDF</Link>
              <p className="text-xs text-muted-foreground capitalize">Dollar Am</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between align-baseline">
          
        </div>

          {/* Historique des ventes et achats */}
          {/* {datas && <Card>
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
          </Card>} */}
          
      </div>
    </CaissierLayout>
  );
}
 