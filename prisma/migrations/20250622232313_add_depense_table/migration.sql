/*
  Warnings:

  - You are about to drop the `ClotureCaisse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MouvementCaisse` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeDepense" AS ENUM ('FOURNITURE', 'SALAIRE', 'LOYER', 'EMPRUNT', 'TAXE', 'AUTRES');

-- DropForeignKey
ALTER TABLE "ClotureCaisse" DROP CONSTRAINT "ClotureCaisse_agentId_fkey";

-- DropForeignKey
ALTER TABLE "ClotureCaisse" DROP CONSTRAINT "ClotureCaisse_entrepriseId_fkey";

-- DropForeignKey
ALTER TABLE "MouvementCaisse" DROP CONSTRAINT "MouvementCaisse_agentId_fkey";

-- DropForeignKey
ALTER TABLE "MouvementCaisse" DROP CONSTRAINT "MouvementCaisse_caisseId_fkey";

-- AlterTable
ALTER TABLE "Paiement" ADD COLUMN     "depenseId" INTEGER;

-- DropTable
DROP TABLE "ClotureCaisse";

-- DropTable
DROP TABLE "MouvementCaisse";

-- DropEnum
DROP TYPE "CategorieMouvement";

-- DropEnum
DROP TYPE "TypeMouvementCaisse";

-- CreateTable
CREATE TABLE "Depense" (
    "id" SERIAL NOT NULL,
    "caisseId" INTEGER NOT NULL,
    "referenceExterne" VARCHAR(100),
    "type" "TypeDepense" NOT NULL,
    "description" TEXT,
    "agentId" INTEGER NOT NULL,
    "entrepriseId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Depense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "Depense"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
