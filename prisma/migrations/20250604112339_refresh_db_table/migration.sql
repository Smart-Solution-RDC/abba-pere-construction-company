/*
  Warnings:

  - You are about to drop the column `enregisterParId` on the `Achat` table. All the data in the column will be lost.
  - You are about to drop the column `enregisterParId` on the `Vente` table. All the data in the column will be lost.
  - Added the required column `enregistrerParId` to the `Achat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enregistrerParId` to the `Vente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Achat" DROP CONSTRAINT "Achat_enregisterParId_fkey";

-- DropForeignKey
ALTER TABLE "Vente" DROP CONSTRAINT "Vente_enregisterParId_fkey";

-- AlterTable
ALTER TABLE "Achat" DROP COLUMN "enregisterParId",
ADD COLUMN     "enregistrerParId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vente" DROP COLUMN "enregisterParId",
ADD COLUMN     "enregistrerParId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_enregistrerParId_fkey" FOREIGN KEY ("enregistrerParId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_enregistrerParId_fkey" FOREIGN KEY ("enregistrerParId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
