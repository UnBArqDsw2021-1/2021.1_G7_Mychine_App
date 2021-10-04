import { PrismaClient } from '@prisma/client';
import sha3 from 'crypto-js/sha3';

import { address, category, products, users } from './seedData';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < users.length; i += 1) {
    users[i].password = sha3(users[i].password).toString();
  }

  await prisma.user.createMany({ data: users });
  await prisma.category.createMany({ data: category });
  await prisma.product.createMany({ data: products });
  await prisma.address.createMany({ data: address });
}
main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
