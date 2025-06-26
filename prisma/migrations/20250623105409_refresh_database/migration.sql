/*
  Warnings:

  - You are about to drop the column `caisseid` on the `ModePaiement` table. All the data in the column will be lost.
  - Added the required column `caisseId` to the `ModePaiement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ModePaiement" DROP CONSTRAINT "ModePaiement_caisseid_fkey";

-- AlterTable
ALTER TABLE "ModePaiement" DROP COLUMN "caisseid",
ADD COLUMN     "caisseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ModePaiement" ADD CONSTRAINT "ModePaiement_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
