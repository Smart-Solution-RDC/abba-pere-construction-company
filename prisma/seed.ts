// prisma/seed.ts

import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log(`Démarrage du seeding... 🌱`);

  await prisma.entreprise.deleteMany({});
  await prisma.produit.deleteMany({});
  await prisma.teneur.deleteMany({});
  await prisma.devise.deleteMany({});
  await prisma.fournisseur.deleteMany({});
  await prisma.utilisateur.deleteMany({});

  await prisma.entreprise.upsert({
    where: {nom: 'Abba Père Conctruction Company'},
    update: {},
    create: {
        nom: 'Abba Père Conctruction Company',
        encronyme: 'accp',
        code_postale: "sd90K12",
        adresse: "Siege : uvira - Bukavu",
        tel: "0979411354",
        site: "http://accp.vercel.com",
        email: "accp@gmail.com",
        description: "My site description",
        logo: "/logo.png"
    }
  })
  
  const users = await prisma.utilisateur.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
        nom: 'Admin',
        postnom: 'Admin',
        role: 'admin',
        email: 'admin@example.com',
    }
  });

    // Create Default Teneur
  const teneur1 = await prisma.teneur.upsert({
    where: {valeur: 32.5},
    update: {},
    create: {
      valeur: 32.5,
      utilisateurId: users.id
    }
  });

  const teneur2 = await prisma.teneur.upsert({
    where: {valeur: 42.5},
    update: {},
    create: {
      valeur: 42.5,
      utilisateurId: users.id
    }
  });

    //   Create Default Devise
  const devise1 = await prisma.devise.upsert({
    where: {nom: 'Dollard Américain'},
    update: {},
    create: {
      nom: 'Dollard Américain',
      symbole: '$',
      code: 'USD',
      utilisateurId: users.id
    }
  });

  const devise2 = await prisma.devise.upsert({
    where: {nom: 'Franc Congolais'},
    update: {},
    create: {
        nom: 'Franc Congolais',
        symbole: 'FC',
        code: 'CDF',
        utilisateurId: users.id
    }
  });  

  // Create at least 2 Caisses

    // Create Product
    await prisma.produit.createMany({
        data: [
          {
            designation: 'ciment-1',
            prix: 100.0,
            qtte: 0,
            description: 'My product',
            deviseId: devise1.id,
            teneurId: teneur1.id,
            utilisateurId: users.id
          }, {
            designation: 'ciment-2',
            prix: 100.0,
            qtte: 0,
            description: 'My product',
            deviseId: devise2.id,
            teneurId: teneur2.id,
            utilisateurId: users.id
          }]
    });

    // Create Fournisseur
    await prisma.fournisseur.create({
        data: {
            nom: 'bralima',
            email: 'bralima@gmail.com',
            code_postal: 'sd90K12',
        }
    });    

    // Create Default Roles
  console.log(`Seeding terminé. 🎉`);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); 
  });