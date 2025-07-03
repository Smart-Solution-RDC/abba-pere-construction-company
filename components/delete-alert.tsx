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
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { AlertDialogDescription } from "./ui/alert-dialog";
import { Response } from "@/prisma/defs-front";
// import {  } from "./ui/alert-dialog";

export function AlerteSuppression ({ venteId }: {venteId: string | undefined}) {
    const router = useRouter();
    const [isDisabled, setIsDisabled] = useState(false);
    let [response, setResponse] = useState<Response>();
    const { toast } = useToast();  
    const handleClick = async () => {
      setIsDisabled(true)
      if (venteId) {
        response = await deleteVente(venteId);
      }
      
      if (response && response.message) {
        router.replace('/caissier/historique');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast({
          title: "Message Succès!",
          description:
            response.message,
          // variant: "destructive",
        });
        setIsDisabled(false);
      }

      if (response && response.error) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast({
          title: "Erreur!",
          description:
            response.error,
            variant: "destructive",
        });
        setIsDisabled(false);
      }
}


  return <Dialog>

    {/* <form onSubmit={handleSubmit}> */}
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="mr-2 text-red-500 bg-transparent hover:bg-transparent active:bg-transparent"><Trash /></Button>
      </DialogTrigger>
      
      

      <DialogContent
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Alerte</DialogTitle>
        </DialogHeader>

      {/* <AlertDialogDescription>
        Vérifier bien les informations a supprimé.
      </AlertDialogDescription>     */}

            <span>Voulez-vous supprimer cette vente?</span>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Annuler</Button>
          </DialogClose>
          {/* <DialogClose> */}
            <Button disabled={isDisabled} onClick={handleClick} className="bg-green-600">Supprimer</Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    {/* </form> */}
  </Dialog>
}