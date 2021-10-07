import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { status } from '@prisma/client';

import { ProductController } from '@controllers/productController';
import { UserController } from '@controllers/userController';
import prisma from '@prismadb/database';

/* 
  Expected request: 
{
  "productId" : 1,
  "name": "product name",
  "description": "product description",
  "status" : "Available | Unavailable | Maintenance",
  "price": 1,
  "image":" img link? "
} 
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getSession({ req });
  const user = session ? session.user : null;
  const userController = new UserController();

  if (req.method === 'PUT' && user) {
    const result = await userController.getOne(prisma, {
      where: {
        email: user.email,
      },
    });
    if (result.isAdm) {
      const productController = new ProductController();
      const prod = req.body;
      if (prod.status && !(prod.status in status)) {
        res.status(400).json({ error: 'Invalid status field.' });
        return;
      }
      const prodId = prod.productId;
      delete prod.productId;
      try {
        await productController.update(prisma, prod, prodId);
      } catch (error) {
        res.status(400).json({
          error: 'Failed to update product, please review your request body.',
        });
        return;
      }
      res.status(200).json({ message: 'Product updated.' });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    res.status(403).json({
      error: `Can not handle this request method or the user is not logged in`,
    });
  }
}
