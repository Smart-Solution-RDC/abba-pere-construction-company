// prisma/seed.ts

import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

// const userData = [
//   {
//     id: 'default-admin',
//     nom: 'Admin',
//     postnom: 'Admin',
//     role: 'admin',
//     email: 'admin@example.com',
//     posts: {
//       create: [ ],
//     },
//   }
// ];

// export async function main() {
//   for (const u of userData) {
//     await prisma.utilisateur.create({ data: u });
//   }
// }

// main();

async function main() {
  console.log(`Démarrage du seeding... 🌱`);

  await prisma.entreprise.create({
    data: {
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

  await prisma.utilisateur.create({
    data: {
        id: 'default-admin',
        nom: 'Admin',
        postnom: 'Admin',
        role: 'admin',
        email: 'admin@example.com',
    },
  });

    //   Create Default Teneur
  await prisma.teneur.create({
    data: {
        valeur: 32.5,
        utilisateurId: 'default-admin'
    },
  });

  await prisma.teneur.create({
    data: {
        valeur: 42.5,
        utilisateurId: 'default-admin'
    },
  });

    //   Create Default Devise
    await prisma.devise.create({
    data: {
        nom: 'Dollard Américain',
        symbole: '$',
        code: 'USD',
        utilisateurId: 'default-admin'
        }
    });

    await prisma.devise.create({
        data: {
            nom: 'Franc Congolais',
            symbole: 'FC',
            code: 'CDF',
            utilisateurId: 'default-admin'
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