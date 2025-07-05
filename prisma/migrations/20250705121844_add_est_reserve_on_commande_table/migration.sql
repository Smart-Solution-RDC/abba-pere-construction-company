/*
  Warnings:

  - The values [EN_COURS] on the enum `StatutCommande` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `fournisseurId` on the `Achat` table. All the data in the column will be lost.
  - You are about to drop the column `enregistrerPar` on the `Commande` table. All the data in the column will be lost.
  - You are about to drop the column `fournisseurId` on the `Commande` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Commande` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `Commande` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatutCommande_new" AS ENUM ('EN_ATTENTE_PAIEMENT', 'PAIEE', 'LIVREE', 'ANNULEE');
ALTER TABLE "Commande" ALTER COLUMN "statut" DROP DEFAULT;
ALTER TABLE "Commande" ALTER COLUMN "statut" TYPE "StatutCommande_new" USING ("statut"::text::"StatutCommande_new");
ALTER TYPE "StatutCommande" RENAME TO "StatutCommande_old";
ALTER TYPE "StatutCommande_new" RENAME TO "StatutCommande";
DROP TYPE "StatutCommande_old";
ALTER TABLE "Commande" ALTER COLUMN "statut" SET DEFAULT 'EN_ATTENTE_PAIEMENT';
COMMIT;

-- DropForeignKey
ALTER TABLE "Achat" DROP CONSTRAINT "Achat_fournisseurId_fkey";

-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_fournisseurId_fkey";

-- AlterTable
ALTER TABLE "Achat" DROP COLUMN "fournisseurId";

-- AlterTable
ALTER TABLE "Commande" DROP COLUMN "enregistrerPar",
DROP COLUMN "fournisseurId",
DROP COLUMN "nom",
DROP COLUMN "tel",
ADD COLUMN     "acheteurTiersId" INTEGER,
ADD COLUMN     "estReserve" BOOLEAN;

-- CreateTable
CREATE TABLE "AcheteurTiers" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "tel" TEXT NOT NULL,

    CONSTRAINT "AcheteurTiers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_acheteurTiersId_fkey" FOREIGN KEY ("acheteurTiersId") REFERENCES "AcheteurTiers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
