/*
  Warnings:

  - You are about to drop the column `clotureCaisseId` on the `Vente` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vente" DROP CONSTRAINT "Vente_clotureCaisseId_fkey";

-- AlterTable
ALTER TABLE "Vente" DROP COLUMN "clotureCaisseId";
