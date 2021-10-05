import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@controllers/userController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userController = new UserController();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const users = await userController.list(prisma);
  res.status(200).json(users);
}
