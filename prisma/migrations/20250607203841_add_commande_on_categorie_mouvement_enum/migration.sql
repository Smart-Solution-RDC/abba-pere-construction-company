/*
  Warnings:

  - The values [FOURNISSEUR] on the enum `CategorieMouvement` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategorieMouvement_new" AS ENUM ('ACHAT', 'VENTE', 'COMMANDE', 'FOURNITUR', 'SALAIRE', 'LOYER', 'EMPRUNT', 'TAXE', 'AUTRES');
ALTER TABLE "MouvementCaisse" ALTER COLUMN "categorie" DROP DEFAULT;
ALTER TABLE "MouvementCaisse" ALTER COLUMN "categorie" TYPE "CategorieMouvement_new" USING ("categorie"::text::"CategorieMouvement_new");
ALTER TYPE "CategorieMouvement" RENAME TO "CategorieMouvement_old";
ALTER TYPE "CategorieMouvement_new" RENAME TO "CategorieMouvement";
DROP TYPE "CategorieMouvement_old";
ALTER TABLE "MouvementCaisse" ALTER COLUMN "categorie" SET DEFAULT 'VENTE';
COMMIT;
