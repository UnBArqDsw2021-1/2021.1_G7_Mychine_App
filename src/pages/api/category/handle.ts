import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoryController } from '@controllers/categoryController';
import { CategoryCreate } from '@models/Category';

// eslint-disable-next-line import/no-unresolved
import prisma from '@prismadb/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const categoryController = new CategoryController();

    const categoryData: CategoryCreate = req.body;
    const aCategory = await categoryController.create(prisma, categoryData);

    res.status(200).json(aCategory);
  }
  if (req.method === 'GET') {
    const categoryController = new CategoryController();
    const categories = await categoryController.list(prisma);
    res.status(200).json(categories);
  }
}
