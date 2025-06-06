/*
  Warnings:

  - You are about to drop the column `caisseId` on the `Vente` table. All the data in the column will be lost.
  - Added the required column `caisseId` to the `Paiement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vente" DROP CONSTRAINT "Vente_caisseId_fkey";

-- AlterTable
ALTER TABLE "Paiement" ADD COLUMN     "caisseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vente" DROP COLUMN "caisseId";

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
