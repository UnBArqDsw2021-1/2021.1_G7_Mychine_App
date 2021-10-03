import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@controllers/userController';

import prisma from '@prismadb/database';

const userController = new UserController();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const users = await userController.list(prisma);
  res.status(200).json(users);
}
