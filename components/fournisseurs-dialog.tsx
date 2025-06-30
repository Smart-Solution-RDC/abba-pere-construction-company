import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Agent, Client, Fournisseur } from "@/prisma/defs-front"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getFournisseursWithoutPagination } from "@/actions/fournisseurs"

export function FournisseursDialog (
  { getFournisseur, typeProduit }: 
  { getFournisseur: (fournisseur: Fournisseur | undefined) => void, typeProduit: string }
) {
  const [fournisseurs, setFournisseurs] = useState<Fournisseur[]>();
  const [fournisseur, setFournisseur] = useState<Fournisseur>();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }

  const resetData = () => {
    getFournisseur(undefined);
    setFournisseur(undefined);
    setFournisseurs(undefined);
  }

  const sendData = () => {
    getFournisseur(fournisseur ? fournisseur : undefined);
  }

  const fetchDatas = async (typeProduit: string) => {
    setFournisseur(undefined);
    setIsLoading(true);
    let getDatas: Fournisseur[] = [];
    let datas: Fournisseur[] = [];
    datas = await getFournisseursWithoutPagination();
    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      if (data.typeProduit == typeProduit) {
        getDatas.push(data);
      }
    }
    if (typeProduit === '' && getDatas.length === 0) {
      setFournisseurs(datas);
      setIsLoading(false);
    } else {
      setFournisseurs(getDatas);
      setIsLoading(false);
    }
  }

  return <Dialog>
    <form onSubmit={handleSubmit}>
      <DialogTrigger asChild className="w-full">
        <Button className="bg-green-600 w-full hover:bg-green-600 mt-3" onClick={() => fetchDatas(typeProduit)}>Rattacher à un fournisseur.</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Liste des fournisseurs</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Input 
              id="search" 
              type="search" 
              name="search" 
              value={search} 
              onChange={ e => setSearch(e.target.value) } 
              disabled={isLoading}
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex">
          <Button disabled={isLoading} className="bg-green-600 mr-2" onClick={() => fetchDatas(typeProduit)}>Concerné(s)</Button>
          <Button disabled={isLoading} className="bg-green-600 mr-2" onClick={() => fetchDatas('')}>Tous</Button>
        </div>

        {isLoading && 'Chargement...'}
        {!isLoading && fournisseurs && <div>
          
          <RadioGroup
            value={fournisseur ? String(fournisseur.id) : undefined}
            onValueChange={val => {
              const selected = fournisseurs?.find(c => String(c.id) === val);
              setFournisseur(selected);
            }}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Liste des Fournisseurs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fournisseurs?.filter((fournisseur) => {
                    return search.toLowerCase() === ""
                      ? fournisseur
                      : fournisseur.nom.includes(search);
                  }).map((fournisseur) => (
                    <TableRow key={fournisseur.id}>
                      <TableCell>
                        <RadioGroupItem value={fournisseur ? String(fournisseur.id) : '' } id={`option-${fournisseur.id}`} />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor={`option-${fournisseur.id}`}>{fournisseur.nom.length > 15 ? fournisseur.nom.slice(0,1).toUpperCase()+fournisseur.nom.slice(1,15)+'... ('+ fournisseur.typeProduit +')' : fournisseur.nom.slice(0,1).toUpperCase()+fournisseur.nom.slice(1)+' ('+fournisseur.typeProduit+')'}</Label>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </RadioGroup>
        </div>}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => { resetData() }}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" className="bg-green-600" 
              disabled={!fournisseur}
              onClick={() => sendData()}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
}