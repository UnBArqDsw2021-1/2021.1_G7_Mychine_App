import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import sha3 from 'crypto-js/sha3';

import { UserController } from '@controllers/userController';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST': {
      try {
        const prisma = new PrismaClient();
        const userController = new UserController();
        const loggingUser = req.body;
        const existingUser = await userController.getOne(prisma, {
          where: {
            email: loggingUser.email,
          },
        });
        const hashedPassword = sha3(loggingUser?.password).toString();
        if (hashedPassword === existingUser?.password) {
          res.status(200).json(existingUser);
          return;
        }
        res.status(400).json({ error: 'Credenciais incorretas' });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    }

    default:
      res.status(405).json({ error: `cannot handle ${req.method} method` });
      break;
  }
}
