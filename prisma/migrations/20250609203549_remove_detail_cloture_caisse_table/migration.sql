/*
  Warnings:

  - You are about to drop the `DetailClotureCaisse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_clotureCaisseId_fkey";

-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_produitId_fkey";

-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_venteId_fkey";

-- AlterTable
ALTER TABLE "ClotureCaisse" ADD COLUMN     "entrepriseId" INTEGER;

-- DropTable
DROP TABLE "DetailClotureCaisse";

-- AddForeignKey
ALTER TABLE "ClotureCaisse" ADD CONSTRAINT "ClotureCaisse_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
