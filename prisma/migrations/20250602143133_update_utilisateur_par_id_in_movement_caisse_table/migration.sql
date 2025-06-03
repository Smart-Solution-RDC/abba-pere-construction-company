/*
  Warnings:

  - You are about to drop the column `enregisterParId` on the `MouvementCaisse` table. All the data in the column will be lost.
  - Added the required column `enregistrerParId` to the `MouvementCaisse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MouvementCaisse" DROP CONSTRAINT "MouvementCaisse_enregisterParId_fkey";

-- AlterTable
ALTER TABLE "MouvementCaisse" DROP COLUMN "enregisterParId",
ADD COLUMN     "enregistrerParId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MouvementCaisse" ADD CONSTRAINT "MouvementCaisse_enregistrerParId_fkey" FOREIGN KEY ("enregistrerParId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
