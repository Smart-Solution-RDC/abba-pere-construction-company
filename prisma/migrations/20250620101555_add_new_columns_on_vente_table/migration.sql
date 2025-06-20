/*
  Warnings:

  - You are about to drop the column `typeAcheteur` on the `Vente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vente" DROP COLUMN "typeAcheteur",
ADD COLUMN     "adresseLivraison" VARCHAR(255),
ADD COLUMN     "dateLivraison" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nom" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "tel" TEXT;
