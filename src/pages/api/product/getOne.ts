import type { NextApiRequest, NextApiResponse } from 'next';

import { ProductController } from '@controllers/productController';
import prisma from '@prismadb/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const productController = new ProductController();
    if (!req.query.id) {
      res.status(400).json({ error: 'missing id attribute in request URL' });
      return;
    }
    let productId: any = req.query.id;
    productId = parseInt(productId, 10);
    const aProduct = await productController.getOne(prisma, {
      where: {
        productId,
      },
      include: {
        category: true,
      },
    });

    if (!aProduct) {
      res.status(400).json({ error: `no product found with id ${productId}` });
      return;
    }
    delete aProduct.categoryId;
    res.status(200).json(aProduct);
  }
}
