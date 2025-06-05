-- CreateEnum
CREATE TYPE "CategorieMouvement" AS ENUM ('ACHAT', 'VENTE', 'FOURNISSEUR', 'SALAIRE', 'LOYER', 'EMPRUNT', 'TAXE', 'AUTRES');

-- AlterTable
ALTER TABLE "MouvementCaisse" ADD COLUMN     "categorie" "CategorieMouvement" NOT NULL DEFAULT 'VENTE',
ALTER COLUMN "type_mouvement" SET DEFAULT 'SORTIE';
