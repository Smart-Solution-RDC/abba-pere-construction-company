import { deleteVente } from "@/actions/vente";
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
import { Trash, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Response, ResponseValidation } from "@/prisma/defs-front";
import { Produit } from "@/app/generated/prisma";
import { deleteProduit } from "@/actions/produits";

export function AlerteSuppressionProduit (
    {id, getProduits }: 
    {id: number, getProduits: (val: Produit | undefined) => void }) {
    const router = useRouter();
    const [isDisabled, setIsDisabled] = useState(false);
    let [response, setResponse] = useState<Response>();
    const { toast } = useToast();  
    const handleClick = async () => {
      setIsDisabled(true)
      if (id) response = await deleteProduit(id);
      
      if (response && response.error && response.data) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast({
          title: "Erreur!",
          description:
            response.error,
            variant: "destructive",
        });
        setIsDisabled(false);
      } 

      if (response && response.message && response.data) {
        getProduits(response.data);
        toast({
        title: "Message Succès!",
        description:
          response.message,
        // variant: "destructive",
        });
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        router.refresh();
        setIsDisabled(false);
      }
    }

  return <Dialog>
    {/* <form onSubmit={handleSubmit}> */}
      <DialogTrigger>
        {/* <Button size="icon" variant="outline" className="mr-2 text-red-500 bg-transparent hover:bg-transparent active:bg-transparent"><Trash /></Button> */}
        <Button variant="ghost" size="sm" >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>      

      <DialogContent
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Alerte</DialogTitle>
        </DialogHeader>
          <span>Voulez-vous supprimer ce produit?</span>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => { setIsDisabled(false) }}>Annuler</Button>
          </DialogClose>
          <DialogClose>
            <Button disabled={isDisabled} onClick={handleClick} className="bg-green-600">Supprimer</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    {/* </form> */}
  </Dialog>
}