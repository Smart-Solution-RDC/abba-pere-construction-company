/*
  Warnings:

  - You are about to drop the column `deviseId` on the `MouvementCaisse` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MouvementCaisse" DROP CONSTRAINT "MouvementCaisse_deviseId_fkey";

-- AlterTable
ALTER TABLE "MouvementCaisse" DROP COLUMN "deviseId";
