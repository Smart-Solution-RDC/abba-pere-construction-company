/*
  Warnings:

  - Added the required column `moyen_paiement` to the `MouvementCaisse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MouvementCaisse" ADD COLUMN     "moyen_paiement" "MoyenPaiment" NOT NULL;
