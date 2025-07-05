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
import { AcheteurTiersForm, Client } from "@/prisma/defs-front"
import { Label } from "./ui/label"
import { useToast } from "@/hooks/use-toast";

export function AcheteurTiersDialog(
  { getAcheteurTiers }: { 
    getAcheteurTiers: (acheteur: AcheteurTiersForm) => void, 
  }
) {
  const { toast } = useToast(); 
  const [form, setForm] = useState<AcheteurTiersForm>({
    nom: '',
    postnom: '',
    tel: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleValid = () => {
      setError('');
    if (form.nom !== '' && form.postnom !== '' && form.tel.length == 10) {
      setError('');
      getAcheteurTiers(form);
      setForm({
        nom: '',
        postnom: '',
        tel: '',
        email: ''
      });
      setIsModalOpen(false);
    } else {
      setError('Formulaire Invalide')
    }
  }
  
  const resetForm = () => {
    setForm({
      nom: '',
      postnom: '',
      tel: '',
      email: ''
    });
    getAcheteurTiers({
      nom: '',
      postnom: '',
      tel: '',
      email: ''
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
    <form onSubmit={handleSubmit}>
      <DialogTrigger asChild className="w-full">
        <Button variant="outline" className="border-none text-green-600 underline hover:bg-transparent">Lier à un acheteur tiers.</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Acheteur Tiers</DialogTitle>
        </DialogHeader>

        <div>
          <Label htmlFor="nom">Nom</Label>
          <Input
            id="nom"
            required
            value={form.nom}
            onChange={(e) =>
              setForm({ ...form, nom: e.target.value })
            }
            placeholder="Nom"
          />
        </div>
        <div>
          <Label htmlFor="postnom">Postom</Label>
          <Input
            id="postnom"
            required
            value={form.postnom}
            onChange={(e) =>
              setForm({ ...form, postnom: e.target.value })
            }
            placeholder="Postnom"
          />
        </div>
        <div>
          <Label htmlFor="tel">Téléphone</Label>
          <Input
            id="tel"
            required
            minLength={10}
            maxLength={10}
            value={form.tel}
            onChange={(e) =>
              setForm({ ...form, tel: e.target.value })
            }
            placeholder="+243 XXX XXX XXX"
          />
        </div>
        <div>
          <Label htmlFor="email">Adresse Mail (Optionnel)</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Adresse Mail"
          />
        </div>

        <span className="text-red-500 text-sm">{error}</span>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={resetForm}>Annuler</Button>
          </DialogClose>
          {/* <DialogClose asChild> */}
            <Button type="submit" onClick={() => handleValid()}>Valider</Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
}