-- DropForeignKey
ALTER TABLE "MouvementCaisse" DROP CONSTRAINT "MouvementCaisse_deviseId_fkey";

-- AlterTable
ALTER TABLE "MouvementCaisse" ALTER COLUMN "deviseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MouvementCaisse" ADD CONSTRAINT "MouvementCaisse_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
