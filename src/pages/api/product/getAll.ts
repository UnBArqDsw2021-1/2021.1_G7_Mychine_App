import type { NextApiRequest, NextApiResponse } from 'next';
import { product } from '@prisma/client';

import { ProductController } from '@controllers/productController';
import prisma from '@prismadb/database';

/*
o usuário deve conseguir buscar produtos por meio de fragmentos do seu nome, descrição
o usuário deve conseguir buscar por meio de faixas de preço.
o usuário deve conseguir buscar por meio da categoria do produto
*/

type ProductParams = {
  searchText?: string;
  maxPrice?: string;
  minPrice?: string;
  categoryId?: string;
  orderByPrice?: 'ASC' | 'DESC';
};

async function searchFromText(
  text: string,
  productController: ProductController
) {
  const result = await productController.list(prisma, {
    where: {
      OR: [
        {
          name: {
            contains: text,
          },
        },
        {
          description: {
            contains: text,
          },
        },
      ],
    },
  });
  return result;
}

async function searchCategory(
  category: string,
  productController: ProductController
) {
  const result = await productController.list(prisma, {
    where: {
      categoryId: Number(category),
    },
  });
  return result;
}

function filterByCategory(results: product[], category: string) {
  const filteredRes = results.filter((prod) => {
    return prod.categoryId === Number(category);
  });
  return filteredRes;
}

function filterByMaxPrice(results: product[], maxPrice: string) {
  const filteredRes = results.filter((prod) => {
    return prod.price <= Number(maxPrice);
  });
  return filteredRes;
}

function filterByMinPrice(results: product[], minPrice: string) {
  const filteredRes = results.filter((prod) => {
    return prod.price >= Number(minPrice);
  });
  return filteredRes;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let searchParams: ProductParams;
  let results: product[];
  if (req.method === 'GET') {
    const productController = new ProductController();
    searchParams = req.query;

    // se existir pesquisa via texto:
    if (searchParams.searchText) {
      results = await searchFromText(
        searchParams.searchText,
        productController
      );

      // filtrar resultados caso exista uma categoria selecionada
      if (searchParams.categoryId) {
        results = filterByCategory(results, searchParams.categoryId);
      }
    } else if (searchParams.categoryId) {
      results = await searchCategory(
        searchParams.categoryId,
        productController
      );
    } else {
      results = await productController.list(prisma, {
        orderBy: [
          {
            productId: 'desc',
          },
        ],
      });
    }

    // filtrar de acordo com o intervalo superior de preço
    if (searchParams.maxPrice) {
      results = filterByMaxPrice(results, searchParams.maxPrice);
    }

    // filtrar de acordo com o intervalo inferior de preço
    if (searchParams.minPrice) {
      results = filterByMinPrice(results, searchParams.minPrice);
    }

    if (searchParams.orderByPrice) {
      results.sort((p1: product, p2: product) => {
        if (Number(p1.price) >= Number(p2.price)) {
          return 1;
        }
        if (Number(p1.price) <= Number(p2.price)) {
          return -1;
        }
        return 0;
      });

      if (searchParams.orderByPrice === 'DESC') {
        results.reverse();
      }
    }
  } else {
    res.status(405).json({ error: `cannot handle ${req.method} method` });
  }
  res.status(200).json(results);
}
