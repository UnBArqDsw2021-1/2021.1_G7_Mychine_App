import type { NextApiRequest, NextApiResponse } from 'next';
import sha3 from 'crypto-js/sha3';

import { AddressController } from '@controllers/addressController';
import { UserController } from '@controllers/userController';
import { CreateAccount } from '@models/User';

import prisma from '../../../../prisma/database';

export default async function handler(
  /* Rota usada para criar uma conta de usuário.
  Cria as informações relacionadas a um usuário como informações básicas e seu endereço.
   */
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const userController = new UserController();
    const addresController = new AddressController();
    console.log(req.body);
    const user: CreateAccount = { ...req.body };
    user.User.password = sha3(user.User.password).toString();
    let createdUser;
    try {
      createdUser = await userController.create(prisma, user.User);
      delete createdUser.password;
    } catch (error) {
      res.status(400).json({ error: 'email already exists' });
      return;
    }
    let createdAddress;
    try {
      createdAddress = await addresController.create(prisma, user.Address);
    } catch (error) {
      res.status(400).json({ error });
      return;
    }

    res.status(200).json({ createdUser, createdAddress });
    return;
  }
  res.status(405).json({ error: `cannot handle ${req.method} method` });
}
