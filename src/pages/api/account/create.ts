import type { NextApiRequest, NextApiResponse } from 'next';

import { AddressController } from '@controllers/addressController';
import { UserController } from '@controllers/userController';
import prisma from '@prismadb/database';

import { CreateAccount } from '../../../models/User';

const userController = new UserController();
const addressController = new AddressController();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const userCreate: CreateAccount = req.body;
    try {
      const newUser = await userController.create(prisma, userCreate.User);
      const userAddres = await addressController.create(
        prisma,
        userCreate.Address
      );

      res
        .status(200)
        .json({ msg: 'conta criada com sucesso', newUser, userAddres });
      return;
    } catch (e) {
      res.status(400).json({ error: 'Erro ao criar nova conta ' });
    }
  }
}
