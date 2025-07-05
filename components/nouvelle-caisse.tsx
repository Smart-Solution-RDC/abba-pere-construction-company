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
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Response } from "@/prisma/defs-front";

export function NouvelleCaisse () {
    // const router = useRouter();
    const [isDisabled, setIsDisabled] = useState(false);
    // let [response, setResponse] = useState<Response>();
    const { toast } = useToast();  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert('Create data. Else, update');
    }

    // const handleSubmit = () => {

    //   setIsDisabled(true)
    //   if (id) response = await deleteDevise(id);
      
    //   if (response && response.error && response.data) {
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     toast({
    //       title: "Erreur!",
    //       description:
    //         response.error,
    //         variant: "destructive",
    //     });
    //     setIsDisabled(false);
    //   } 

    //   if (response && response.message && response.data) {
    //     console.log(response.data);
    //     getDevises(response.data);
    //     toast({
    //     title: "Message Succès!",
    //     description:
    //       response.message,
    //     // variant: "destructive",
    //     });
    //     // await new Promise((resolve) => setTimeout(resolve, 1000));
    //     router.refresh();
    //     setIsDisabled(false);
    
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     alert('Create data. Else, update');
    // }
    //   }
// }


  return <Dialog>
      <DialogTrigger>
        <Button >
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle Caisse
        </Button>
      </DialogTrigger>      

      <DialogContent
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Alerte</DialogTitle>
        </DialogHeader>
          <form onSubmit={handleSubmit}></form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => {}}>Annuler</Button>
          </DialogClose>
          <DialogClose>
            <Button disabled={isDisabled} onClick={() => {}} className="bg-green-600">Supprimer</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    {/* </form> */}
  </Dialog>
} 