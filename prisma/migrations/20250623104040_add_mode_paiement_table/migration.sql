/*
  Warnings:

  - You are about to drop the column `soldeActuel` on the `Caisse` table. All the data in the column will be lost.
  - You are about to drop the column `modePaiement` on the `DetailPanier` table. All the data in the column will be lost.
  - You are about to drop the column `modePaiement` on the `Paiement` table. All the data in the column will be lost.
  - You are about to drop the column `totalHT` on the `Paiement` table. All the data in the column will be lost.
  - You are about to drop the column `totalTTC` on the `Paiement` table. All the data in the column will be lost.
  - Added the required column `modePaiementId` to the `DetailPanier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modePaiementId` to the `Paiement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeModePaiement" AS ENUM ('CACHE', 'BANQUE');

-- AlterTable
ALTER TABLE "Caisse" DROP COLUMN "soldeActuel";

-- AlterTable
ALTER TABLE "DetailPanier" DROP COLUMN "modePaiement",
ADD COLUMN     "modePaiementId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Paiement" DROP COLUMN "modePaiement",
DROP COLUMN "totalHT",
DROP COLUMN "totalTTC",
ADD COLUMN     "modePaiementId" INTEGER NOT NULL,
ADD COLUMN     "montant" DOUBLE PRECISION;

-- DropEnum
DROP TYPE "ModePaiment";

-- CreateTable
CREATE TABLE "ModePaiement" (
    "id" SERIAL NOT NULL,
    "type" "TypeModePaiement" NOT NULL DEFAULT 'CACHE',
    "soldeActuel" DOUBLE PRECISION DEFAULT 0,
    "caisseid" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModePaiement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ModePaiement_type_key" ON "ModePaiement"("type");

-- AddForeignKey
ALTER TABLE "ModePaiement" ADD CONSTRAINT "ModePaiement_caisseid_fkey" FOREIGN KEY ("caisseid") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_modePaiementId_fkey" FOREIGN KEY ("modePaiementId") REFERENCES "ModePaiement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_modePaiementId_fkey" FOREIGN KEY ("modePaiementId") REFERENCES "ModePaiement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
