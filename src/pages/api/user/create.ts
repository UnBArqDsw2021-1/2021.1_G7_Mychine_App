// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import sha3 from 'crypto-js/sha3';

type user = {
  email: string
  password: string
  name: string,
  phone: string
  cpf: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {


  if (req.method === "POST") {
    const prisma = new PrismaClient();
    let user: user = { ...req.body }

    user.password = sha3(user.password).toString();

    try {
      await prisma.user.create({ data: user });
    } catch (error) {
      res.status(400).json({ 'error': 'email already exists' });
      return;
    }
    res.status(200).json(user);
    return;
  }
  res.status(405).json({ 'error': `cannot handle ${req.method} method` });
}
