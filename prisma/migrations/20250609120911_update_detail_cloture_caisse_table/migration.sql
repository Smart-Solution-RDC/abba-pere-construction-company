/*
  Warnings:

  - You are about to drop the column `referenceVente` on the `DetailClotureCaisse` table. All the data in the column will be lost.
  - Added the required column `venteId` to the `DetailClotureCaisse` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DetailClotureCaisse_referenceVente_key";

-- AlterTable
ALTER TABLE "DetailClotureCaisse" DROP COLUMN "referenceVente",
ADD COLUMN     "venteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_venteId_fkey" FOREIGN KEY ("venteId") REFERENCES "Vente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
