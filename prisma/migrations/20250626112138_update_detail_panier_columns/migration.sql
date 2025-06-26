-- DropForeignKey
ALTER TABLE "DetailPanier" DROP CONSTRAINT "DetailPanier_deviseId_fkey";

-- DropForeignKey
ALTER TABLE "DetailPanier" DROP CONSTRAINT "DetailPanier_modePaiementId_fkey";

-- AlterTable
ALTER TABLE "DetailPanier" ALTER COLUMN "deviseId" DROP NOT NULL,
ALTER COLUMN "modePaiementId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_modePaiementId_fkey" FOREIGN KEY ("modePaiementId") REFERENCES "ModePaiement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
