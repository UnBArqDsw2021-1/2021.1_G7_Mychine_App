import { PrismaClient } from '@prisma/client';

import { address, category, products, users } from './seedData';

const prisma = new PrismaClient();

async function main() {
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
