import type { NextApiRequest, NextApiResponse } from 'next';
import sha3 from 'crypto-js/sha3';

import { UserController } from '@controllers/userController';

import prisma from '../../../../prisma/database';

export default async function handler(
  /* Rota usada para criar uma conta de usuário.
  Cria as informações relacionadas a um usuário como informações básicas e seu endereço.
   */
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const userData = JSON.parse(req.body);
    delete userData.terms;
    delete userData.passwordConfirmation;
    const userController = new UserController();
    userData.password = sha3(userData.password).toString();
    try {
      await userController.create(prisma, userData);
      delete userData.password;
    } catch (error) {
      res.status(400).json({ error: 'Some data may already be registered.' });
      return;
    }

    res.status(200).json({ userData });
    return;
  }
  res.status(405).json({ error: `cannot handle ${req.method} method` });
}
