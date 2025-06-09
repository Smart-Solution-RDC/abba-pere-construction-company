/*
  Warnings:

  - You are about to drop the `DetailClotureCaisse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qtteRestante` to the `ClotureCaisse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clotureCaisseId` to the `Vente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClotureCaisse" DROP CONSTRAINT "ClotureCaisse_caisseId_fkey";

-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_clotureCaisseId_fkey";

-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_produitId_fkey";

-- DropForeignKey
ALTER TABLE "DetailClotureCaisse" DROP CONSTRAINT "DetailClotureCaisse_teneurId_fkey";

-- AlterTable
ALTER TABLE "ClotureCaisse" ADD COLUMN     "qtteRestante" INTEGER NOT NULL,
ALTER COLUMN "caisseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vente" ADD COLUMN     "clotureCaisseId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "DetailClotureCaisse";

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_clotureCaisseId_fkey" FOREIGN KEY ("clotureCaisseId") REFERENCES "ClotureCaisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClotureCaisse" ADD CONSTRAINT "ClotureCaisse_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
