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
import { getClientsWithoutPagination } from "@/actions/clients"
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
import { getAgentsWithoutPagination } from "@/actions/agents"

export function AcheteurDialog(
  { getClient, getFournisseur, getAgent }: { 
    getClient: (client: Client | undefined) => void, 
    getFournisseur: (fournisseur: Fournisseur | undefined) => void, 
    getAgent: (agent: Agent | undefined) => void, 
  }
) {
  const [clients, setClients] = useState<Client[]>();
  const [fournisseurs, setFournisseurs] = useState<Fournisseur[]>();
  const [agents, setAgents] = useState<Agent[]>();

  const [client, setClient] = useState<Client>();
  const [fournisseur, setFournisseur] = useState<Fournisseur>();
  const [agent, setAgent] = useState<Agent>();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }

  const callData = async (table: 'client' | 'fournisseur' | 'agent') => {
    if (table == 'client') {
      setAgent(undefined);
      setFournisseur(undefined);
      setFournisseurs(undefined);
      setAgents(undefined);
      setIsLoading(true);
      setClients(await getClientsWithoutPagination());
      setIsLoading(false);
    } else if (table == 'fournisseur') {
      // undefined unique...
      setClient(undefined);
      setAgent(undefined);
      setFournisseur(undefined);
      getClient(undefined);
      setClients(undefined);
      setAgents(undefined);
      setIsLoading(true);
      setFournisseurs(await getFournisseursWithoutPagination());
      setIsLoading(false);
    } else {
      setClient(undefined);
      setAgent(undefined);
      setFournisseur(undefined);
      getClient(undefined);
      setClients(undefined);
      setFournisseurs(undefined);
      setIsLoading(true);
      setAgents(await getAgentsWithoutPagination());
      setIsLoading(false);
    }
  }

  const sendData = () => {
    getClient(client ? client : undefined);
    getFournisseur(fournisseur ? fournisseur : undefined);
    getAgent(agent ? agent : undefined);
  }

  const fetchClients = () => {
    setClient(undefined);
    callData('client');
  }

  return <Dialog>
    <form onSubmit={handleSubmit}>
      <DialogTrigger asChild className="w-full">
        <Button variant="outline" className="border-none text-green-600 underline hover:bg-transparent" onClick={() => fetchClients()}>Lier à un acheteur existant.</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Informations Client</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Input 
              id="search" 
              type="search" 
              name="search" 
              value={search} 
              onChange={
                e => setSearch(e.target.value)
              } 
              placeholder="Search"
               />
          </div>
          <div className="flex">
            <Button disabled={isLoading} className="bg-green-600 mr-2" onClick={() => callData('client')}>Clients</Button>
            <Button disabled={isLoading} className="bg-green-600 mr-2" onClick={() => callData('fournisseur')}>Fournisseurs</Button>
            <Button disabled={isLoading} className="bg-green-600 mr-2" onClick={() => callData('agent')}>Agents</Button>
          </div>
        </div>

        {isLoading && !clients && fournisseurs && 'Chargement...'}
        {!isLoading && clients && <div>
          <RadioGroup
            value={client ? String(client.id) : undefined}
            onValueChange={val => {
              const selected = clients?.find(c => String(c.id) === val);
              setClient(selected);
            }}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Liste des Clients</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients?.filter((client) => {
                    return search.toLowerCase() === ""
                      ? client
                      : client.nom_complet.includes(search);
                  }).map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>
                        <RadioGroupItem value={client && String(client.id) } id={`option-${client.id}`} />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor={`option-${client.id}`}>{client.nom_complet.length > 15 ? client.nom_complet.slice(0,1).toUpperCase()+client.nom_complet.slice(1, 15)+'...' : client.nom_complet.slice(0,1).toUpperCase()+client.nom_complet.slice(1)}</Label>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </RadioGroup>
        </div>}


        {isLoading && !clients && fournisseurs && 'Chargement...'}
        {!isLoading && agents && <div>
          <RadioGroup
            value={agent ? String(agent.id) : undefined}
            onValueChange={val => {
              const selected = agents?.find(c => String(c.id) === val);
              setAgent(selected);
            }}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Liste des Agents</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {agents?.filter((agent) => {
                    return search.toLowerCase() === ""
                      ? agent
                      : agent.nom_complet.includes(search);
                  }).map((agent) => (
                    <TableRow key={agent.id}>
                      <TableCell>
                        <RadioGroupItem value={agent ? String(agent.id) : '' } id={`option-${agent.id}`} />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor={`option-${agent.id}`}>{agent.nom_complet.length > 15 ? agent.nom_complet.slice(0,1).toUpperCase()+agent.nom_complet.slice(1,15)+'...' : agent.nom_complet.slice(0,1).toUpperCase()+agent.nom_complet.slice(1)}</Label>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </RadioGroup>
        </div>}


        {isLoading && !fournisseurs && 'Chargement...'}
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
                        <Label htmlFor={`option-${fournisseur.id}`}>{fournisseur.nom.length > 15 ? fournisseur.nom.slice(0,1).toUpperCase()+fournisseurs.slice(1,15)+'...' : fournisseur.nom.slice(0,1).toUpperCase()+fournisseur.nom.slice(1)}</Label>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </RadioGroup>
        </div>}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => { sendData() }}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" 
              disabled={!client && !fournisseur && !agent}
              onClick={() => sendData()}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
}