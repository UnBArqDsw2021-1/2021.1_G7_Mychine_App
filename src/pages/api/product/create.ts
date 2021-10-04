import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductController } from '@controllers/productController';
import { ProductCreate } from '@models/Product';

// eslint-disable-next-line import/no-unresolved
import prisma from '@prismadb/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const productController = new ProductController();
    const productData: ProductCreate = req.body;
    const categoryId = productData.category;
    delete productData.category;
    const aProduct = await productController.create(prisma, {
      ...productData,
      category: {
        connect: {
          categoryId,
        },
      },
    });

    res.status(200).json(aProduct);
  }
}
