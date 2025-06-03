/*
  Warnings:

  - You are about to drop the column `description` on the `MouvementCaisse` table. All the data in the column will be lost.
  - You are about to drop the column `typeMouvement` on the `MouvementCaisse` table. All the data in the column will be lost.
  - Added the required column `type_mouvement` to the `MouvementCaisse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MouvementCaisse" DROP COLUMN "description",
DROP COLUMN "typeMouvement",
ADD COLUMN     "motif_mouvement" TEXT,
ADD COLUMN     "type_mouvement" "TypeMouvementCaisse" NOT NULL;
