import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


export function FormLogistique () {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert('Create data. Else, update');
    }
    return <Card>
        <CardHeader>
            <CardTitle>La logistique</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <Label htmlFor="moyen">Moyen de transport</Label>
                    <Select>
                        <SelectTrigger id="moyen">
                            <SelectValue placeholder="Le moyen de transport" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bateau">
                                Bateau
                            </SelectItem>
                            <SelectItem value="camion">
                                Camion
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mb-2">
                    <Label htmlFor="companie">Companie de Transport</Label>
                    <Input 
                        type="text" 
                        placeholder="Companie de transport" 
                        id="companie"
                    ></Input>
                </div>
                <div className="mb-2">
                    <Label htmlFor="transporteur">Transporteur</Label>
                    <Input 
                        type="text" 
                        placeholder="Transporteur" 
                        id="transporteur"
                    ></Input>
                </div>
                <div className="flex mb-2">
                    <div className="w-full mr-1">
                        <Label htmlFor="lieu_depart">Lieu de départ</Label>
                        <Input 
                            type="text" 
                            placeholder="Lieu de depart" 
                            id="lieu_depart"
                        ></Input>
                    </div>
                    <div className="w-full ml-1">
                        <Label htmlFor="lieu_d_arrive">Lieu d'arrivé</Label>
                        <Input 
                            type="text" 
                            placeholder="Lieu d'arrivé" 
                            id="lieu_d_arrive"
                        ></Input>
                    </div>
                </div>
                <div className="mb-2">
                    <Label htmlFor="tonnage_transporte">Transporteur</Label>
                    <Input 
                        type="text" 
                        placeholder="Tonnage transporté" 
                        id="tonnage_transporte"
                    ></Input>
                </div>
                <div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 active:bg-green-400" size='sm'>
                        Enregistrer
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card> 
}