/*
  Warnings:

  - You are about to alter the column `soldeInitial` on the `Caisse` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `DoublePrecision`.
  - You are about to alter the column `soldeActuel` on the `Caisse` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `DoublePrecision`.
  - You are about to drop the column `motif_mouvement` on the `MouvementCaisse` table. All the data in the column will be lost.
  - You are about to alter the column `montant` on the `MouvementCaisse` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `DoublePrecision`.
  - A unique constraint covering the columns `[referenceExterne]` on the table `MouvementCaisse` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Caisse" ALTER COLUMN "soldeInitial" DROP DEFAULT,
ALTER COLUMN "soldeInitial" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "soldeActuel" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "MouvementCaisse" DROP COLUMN "motif_mouvement",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "referenceExterne" VARCHAR(100),
ALTER COLUMN "montant" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "MouvementCaisse_referenceExterne_key" ON "MouvementCaisse"("referenceExterne");
