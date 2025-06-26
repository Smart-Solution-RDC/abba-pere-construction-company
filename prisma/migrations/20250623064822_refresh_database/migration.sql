/*
  Warnings:

  - You are about to drop the column `type` on the `Depense` table. All the data in the column will be lost.
  - Added the required column `motif` to the `Depense` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MotifsDepense" AS ENUM ('ACHAT_FOURNITURES', 'PAIEMENT_SALAIRE', 'PAIEMENT_LOYER', 'PAIEMENT_EMPRUNT', 'PAIEMENT_TAXE', 'AUTRES');

-- AlterTable
ALTER TABLE "Depense" DROP COLUMN "type",
ADD COLUMN     "motif" "MotifsDepense" NOT NULL;

-- DropEnum
DROP TYPE "TypeDepense";
