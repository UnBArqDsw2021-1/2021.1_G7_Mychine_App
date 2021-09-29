import type { NextApiRequest, NextApiResponse } from 'next';
import { AddressController } from '@controllers/addressController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const addressController = new AddressController();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const adress = await addressController.list(prisma);
  res.status(200).json(adress);
}
