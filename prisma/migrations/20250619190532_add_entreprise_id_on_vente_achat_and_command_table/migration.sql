-- AlterTable
ALTER TABLE "Achat" ADD COLUMN     "entrepriseId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Commande" ADD COLUMN     "entrepriseId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Vente" ADD COLUMN     "entrepriseId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
