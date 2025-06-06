/*
  Warnings:

  - You are about to drop the column `soldePhysique` on the `ClotureCaisse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClotureCaisse" DROP COLUMN "soldePhysique";

-- CreateTable
CREATE TABLE "DetailClotureCaisse" (
    "id" SERIAL NOT NULL,
    "produitId" INTEGER NOT NULL,
    "teneurId" INTEGER NOT NULL,
    "qtteRestante" INTEGER NOT NULL,
    "clotureCaisseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailClotureCaisse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_teneurId_fkey" FOREIGN KEY ("teneurId") REFERENCES "Teneur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_clotureCaisseId_fkey" FOREIGN KEY ("clotureCaisseId") REFERENCES "ClotureCaisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
