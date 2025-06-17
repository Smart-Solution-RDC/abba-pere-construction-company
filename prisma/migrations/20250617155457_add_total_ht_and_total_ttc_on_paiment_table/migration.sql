/*
  Warnings:

  - You are about to drop the column `montant` on the `Paiement` table. All the data in the column will be lost.
  - You are about to drop the column `totalHT` on the `Vente` table. All the data in the column will be lost.
  - You are about to drop the column `totalTTC` on the `Vente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Paiement" DROP COLUMN "montant",
ADD COLUMN     "totalHT" DOUBLE PRECISION,
ADD COLUMN     "totalTTC" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Vente" DROP COLUMN "totalHT",
DROP COLUMN "totalTTC";
