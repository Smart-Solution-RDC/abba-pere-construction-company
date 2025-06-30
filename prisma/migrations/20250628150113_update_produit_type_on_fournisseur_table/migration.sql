/*
  Warnings:

  - The values [EN_ATTENTE] on the enum `StatutVente` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `codePostale` on the `Fournisseur` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeProduit" AS ENUM ('CIMENT', 'CARREAU', 'FER_A_BETON', 'JEPSEN', 'AUTRES');

-- AlterEnum
BEGIN;
CREATE TYPE "StatutVente_new" AS ENUM ('CONFIRME', 'REMBOURSE', 'ANNULE');
ALTER TABLE "Vente" ALTER COLUMN "statut" DROP DEFAULT;
ALTER TABLE "Vente" ALTER COLUMN "statut" TYPE "StatutVente_new" USING ("statut"::text::"StatutVente_new");
ALTER TYPE "StatutVente" RENAME TO "StatutVente_old";
ALTER TYPE "StatutVente_new" RENAME TO "StatutVente";
DROP TYPE "StatutVente_old";
ALTER TABLE "Vente" ALTER COLUMN "statut" SET DEFAULT 'CONFIRME';
COMMIT;

-- AlterTable
ALTER TABLE "Fournisseur" DROP COLUMN "codePostale",
ADD COLUMN     "autresType" TEXT,
ADD COLUMN     "typeProduit" "TypeProduit";

-- AlterTable
ALTER TABLE "Produit" ADD COLUMN     "autresType" TEXT,
ADD COLUMN     "typeProduit" "TypeProduit";

-- DropEnum
DROP TYPE "TypeClient";
