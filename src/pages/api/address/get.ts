import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

import { AddressController } from '@controllers/addressController';

const prisma = new PrismaClient();
const addressController = new AddressController();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const adress = await addressController.list(prisma);
  res.status(200).json(adress);
}
