-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'AGENT');

-- CreateEnum
CREATE TYPE "Sexe" AS ENUM ('HOMME', 'FEMME');

-- CreateEnum
CREATE TYPE "Poste" AS ENUM ('DIRECTEUR', 'SECRETAIRE', 'CAISSIER', 'GERANT');

-- CreateEnum
CREATE TYPE "TypeModePaiement" AS ENUM ('CASH', 'BANQUE', 'CREDIT', 'MOITIER_CREDIT', 'MOITIER_CASH');

-- CreateEnum
CREATE TYPE "StatutVente" AS ENUM ('EN_ATTENTE', 'CONFIRME', 'REMBOURSE', 'ANNULE');

-- CreateEnum
CREATE TYPE "TypeClient" AS ENUM ('ORDINAIRE', 'NOUVEAU', 'CLIENT', 'FOURNISSEUR', 'AGENT');

-- CreateEnum
CREATE TYPE "statutPanier" AS ENUM ('EN_COURS', 'VALIDE', 'ANNULE');

-- CreateEnum
CREATE TYPE "StatutAchat" AS ENUM ('EN_COURS', 'TERMINE', 'ANNULE');

-- CreateEnum
CREATE TYPE "StatutCommande" AS ENUM ('EN_ATTENTE_PAIEMENT', 'EN_COURS', 'LIVREE', 'ANNULEE');

-- CreateEnum
CREATE TYPE "StatutCaisse" AS ENUM ('OUVERTE', 'FERMEE');

-- CreateEnum
CREATE TYPE "MotifsDepense" AS ENUM ('ACHAT_FOURNITURES', 'PAIEMENT_SALAIRE', 'PAIEMENT_LOYER', 'PAIEMENT_EMPRUNT', 'PAIEMENT_TAXE', 'AUTRES');

-- CreateTable
CREATE TABLE "Teneur" (
    "id" SERIAL NOT NULL,
    "valeur" DOUBLE PRECISION NOT NULL,
    "agentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teneur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devise" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "code" VARCHAR(5) NOT NULL,
    "symbole" VARCHAR(5) NOT NULL,
    "tauxDEchange" INTEGER NOT NULL,
    "agentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entreprise" (
    "id" SERIAL NOT NULL,
    "raison_sociale" TEXT,
    "forme_juridique" TEXT,
    "rccm" TEXT,
    "num_impot" TEXT,
    "identification_nationale" TEXT,
    "email" TEXT NOT NULL,
    "secteur_d_activite" TEXT,
    "contenu" TEXT,
    "slogan" TEXT,
    "vision" TEXT,
    "date_de_creation" TIMESTAMP(3),
    "logo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT,
    "nom_complet" TEXT,
    "sexe" "Sexe",
    "role" "Role" NOT NULL DEFAULT 'AGENT',
    "poste" "Poste",
    "picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT,
    "nom_complet" TEXT,
    "sexe" "Sexe",
    "picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adresse" (
    "id" SERIAL NOT NULL,
    "ville" TEXT,
    "adresse" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "agentId" INTEGER,
    "fournisseurId" INTEGER,
    "clientId" INTEGER,
    "entrepriseId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adresse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "tel" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "agentId" INTEGER,
    "fournisseurId" INTEGER,
    "clientId" INTEGER,
    "entrepriseId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "codePostale" TEXT,
    "agentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "designation" TEXT NOT NULL,
    "prixUnitaire" DOUBLE PRECISION NOT NULL,
    "qtteDisponible" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "deviseId" INTEGER NOT NULL,
    "teneurId" INTEGER NOT NULL,
    "agentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModePaiement" (
    "id" SERIAL NOT NULL,
    "type" "TypeModePaiement" DEFAULT 'CASH',
    "soldeActuel" DOUBLE PRECISION DEFAULT 0,
    "caisseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModePaiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id" SERIAL NOT NULL,
    "montant" DOUBLE PRECISION,
    "modePaiementId" INTEGER NOT NULL,
    "deviseId" INTEGER NOT NULL,
    "caisseId" INTEGER NOT NULL,
    "venteId" INTEGER,
    "achatId" INTEGER,
    "commandeId" INTEGER,
    "depenseId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caisse" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "deviseId" INTEGER NOT NULL,
    "agentId" INTEGER NOT NULL,
    "statut" "StatutCaisse" NOT NULL DEFAULT 'OUVERTE',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Caisse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vente" (
    "id" SERIAL NOT NULL,
    "statut" "StatutVente" NOT NULL DEFAULT 'CONFIRME',
    "nom" TEXT,
    "tel" TEXT,
    "dateLivraison" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "adresseLivraison" VARCHAR(255),
    "notes" TEXT,
    "clientId" INTEGER,
    "agentId" INTEGER,
    "fournisseurId" INTEGER,
    "entrepriseId" INTEGER NOT NULL DEFAULT 1,
    "panierId" INTEGER NOT NULL,
    "enregistrerPar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Panier" (
    "id" SERIAL NOT NULL,
    "agentId" INTEGER,
    "clientId" INTEGER,
    "statut" "statutPanier" NOT NULL DEFAULT 'EN_COURS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Panier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPanier" (
    "id" SERIAL NOT NULL,
    "produitId" INTEGER NOT NULL,
    "qtte" INTEGER NOT NULL,
    "prixUnitaire" DOUBLE PRECISION NOT NULL,
    "prixTotalHT" DOUBLE PRECISION NOT NULL,
    "prixTotalTTC" DOUBLE PRECISION NOT NULL,
    "panierId" INTEGER NOT NULL,
    "deviseId" INTEGER,
    "modePaiementId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailPanier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achat" (
    "id" SERIAL NOT NULL,
    "statut" "StatutAchat" NOT NULL DEFAULT 'EN_COURS',
    "panierId" INTEGER NOT NULL,
    "fournisseurId" INTEGER,
    "agentId" INTEGER NOT NULL,
    "entrepriseId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "panierId" INTEGER NOT NULL,
    "nom" TEXT,
    "tel" TEXT,
    "statut" "StatutCommande" NOT NULL DEFAULT 'EN_ATTENTE_PAIEMENT',
    "dateLivraison" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "adresseLivraison" VARCHAR(255),
    "notes" TEXT,
    "clientId" INTEGER,
    "fournisseurId" INTEGER,
    "agentId" INTEGER,
    "enregistrerPar" TEXT,
    "entrepriseId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Depense" (
    "id" SERIAL NOT NULL,
    "caisseId" INTEGER NOT NULL,
    "referenceExterne" VARCHAR(100),
    "motif" "MotifsDepense" NOT NULL,
    "description" TEXT,
    "agentId" INTEGER NOT NULL,
    "entrepriseId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Depense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teneur_valeur_key" ON "Teneur"("valeur");

-- CreateIndex
CREATE UNIQUE INDEX "Devise_nom_key" ON "Devise"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Devise_code_key" ON "Devise"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_email_key" ON "Entreprise"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "Agent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_tel_key" ON "Contact"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Fournisseur_nom_key" ON "Fournisseur"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Fournisseur_email_key" ON "Fournisseur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Caisse_nom_key" ON "Caisse"("nom");

-- AddForeignKey
ALTER TABLE "Teneur" ADD CONSTRAINT "Teneur_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devise" ADD CONSTRAINT "Devise_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresse" ADD CONSTRAINT "Adresse_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresse" ADD CONSTRAINT "Adresse_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresse" ADD CONSTRAINT "Adresse_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresse" ADD CONSTRAINT "Adresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fournisseur" ADD CONSTRAINT "Fournisseur_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_teneurId_fkey" FOREIGN KEY ("teneurId") REFERENCES "Teneur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModePaiement" ADD CONSTRAINT "ModePaiement_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_modePaiementId_fkey" FOREIGN KEY ("modePaiementId") REFERENCES "ModePaiement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_venteId_fkey" FOREIGN KEY ("venteId") REFERENCES "Vente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_achatId_fkey" FOREIGN KEY ("achatId") REFERENCES "Achat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "Depense"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caisse" ADD CONSTRAINT "Caisse_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caisse" ADD CONSTRAINT "Caisse_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_panierId_fkey" FOREIGN KEY ("panierId") REFERENCES "Panier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panier" ADD CONSTRAINT "Panier_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panier" ADD CONSTRAINT "Panier_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_modePaiementId_fkey" FOREIGN KEY ("modePaiementId") REFERENCES "ModePaiement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_deviseId_fkey" FOREIGN KEY ("deviseId") REFERENCES "Devise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPanier" ADD CONSTRAINT "DetailPanier_panierId_fkey" FOREIGN KEY ("panierId") REFERENCES "Panier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_panierId_fkey" FOREIGN KEY ("panierId") REFERENCES "Panier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_panierId_fkey" FOREIGN KEY ("panierId") REFERENCES "Panier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_caisseId_fkey" FOREIGN KEY ("caisseId") REFERENCES "Caisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
