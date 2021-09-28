// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { UserController } from "controllers/userController";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
const userController = new UserController();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const users = await userController.list(prisma);
  res.status(200).json(users);
}
