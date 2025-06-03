/*
  Warnings:

  - Added the required column `deviseId` to the `MouvementCaisse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MouvementCaisse" ADD COLUMN     "deviseId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Ville";

-- AddForeignKey
ALTER TABLE "MouvementCaisse" ADD CONSTRAINT "MouvementCaisse_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
