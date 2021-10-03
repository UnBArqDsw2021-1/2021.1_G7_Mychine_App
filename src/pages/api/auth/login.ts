import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@controllers/userController';
import { PrismaClient } from '@prisma/client';
import sha3 from 'crypto-js/sha3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient();
    const userController = new UserController();
    const loggingUser = req.body;
    const existingUser = await userController.getOne(prisma, {
      where: {
        email: loggingUser.email,
      },
    });
    const hashedPassword = sha3(loggingUser.password).toString();
    if (hashedPassword === existingUser.password) {
      res.status(200).json(existingUser);
      return;
    }
    res.status(400).json({ error: `password doesn't match` });
    return;
  }
  res.status(405).json({ error: `cannot handle ${req.method} method` });
}
