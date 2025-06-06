/*
  Warnings:

  - Added the required column `soldePhysique` to the `ClotureCaisse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caisseId` to the `Vente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClotureCaisse" ADD COLUMN     "soldePhysique" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Vente" ADD COLUMN     "caisseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
