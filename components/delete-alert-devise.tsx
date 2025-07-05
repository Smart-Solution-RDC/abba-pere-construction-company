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
import { AlertDialogDescription } from "./ui/alert-dialog";
import { Response, ResponseValidation } from "@/prisma/defs-front";
import { deleteDevise } from "@/actions/devises";
import { Devise } from "@/app/generated/prisma";

export function AlerteSuppressionDevise (
    {id, getDevises }: 
    {id: number, getDevises: (val: Devise | undefined) => void }) {
    const router = useRouter();
    const [isDisabled, setIsDisabled] = useState(false);
    let [response, setResponse] = useState<Response>();
    const { toast } = useToast();  
    const handleClick = async () => {
      setIsDisabled(true)
      if (id) response = await deleteDevise(id);
      
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
        console.log(response.data);
        getDevises(response.data);
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
      <DialogTrigger asChild>
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
          <span>Voulez-vous supprimer cette devise?</span>
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