-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_teneurId_fkey";

-- AlterTable
ALTER TABLE "DetailPanier" ADD COLUMN     "fournisseurId" INTEGER;

-- AlterTable
ALTER TABLE "Produit" ALTER COLUMN "teneurId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_teneurId_fkey" FOREIGN KEY ("teneurId") REFERENCES "Teneur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;
