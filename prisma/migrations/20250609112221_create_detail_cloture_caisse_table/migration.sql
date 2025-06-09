/*
  Warnings:

  - You are about to drop the column `caisseId` on the `ClotureCaisse` table. All the data in the column will be lost.
  - You are about to drop the column `qtteRestante` on the `ClotureCaisse` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dateCloture]` on the table `ClotureCaisse` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ClotureCaisse" DROP CONSTRAINT "ClotureCaisse_caisseId_fkey";

-- AlterTable
ALTER TABLE "ClotureCaisse" DROP COLUMN "caisseId",
DROP COLUMN "qtteRestante";

-- CreateTable
CREATE TABLE "DetailClotureCaisse" (
    "id" SERIAL NOT NULL,
    "produitId" INTEGER NOT NULL,
    "qtteVendue" INTEGER NOT NULL,
    "qtteRestante" INTEGER NOT NULL,
    "clotureCaisseId" INTEGER NOT NULL,
    "referenceVente" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailClotureCaisse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DetailClotureCaisse_referenceVente_key" ON "DetailClotureCaisse"("referenceVente");

-- CreateIndex
CREATE UNIQUE INDEX "ClotureCaisse_dateCloture_key" ON "ClotureCaisse"("dateCloture");

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailClotureCaisse" ADD CONSTRAINT "DetailClotureCaisse_clotureCaisseId_fkey" FOREIGN KEY ("clotureCaisseId") REFERENCES "ClotureCaisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
