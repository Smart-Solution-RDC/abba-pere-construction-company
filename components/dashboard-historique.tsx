
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function DashboardHistorique () {
    return <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Historique</CardTitle>
              {/* <Clock className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              {/* <div className="text-2xl font-bold">{commandesEnAttente}</div> */}
              <Link href={'/caissier/historique'} className="text-xs text-green-500 underline text-muted-foreground">
                Vantes et Achats
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Rapports journaliers
              </CardTitle>
              {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Link href={'/caissier/historique/rapports'} className="text-xs text-green-500 underline text-muted-foreground">Visualisez les rapports</Link>
            </CardContent>
          </Card>
        </div>
}