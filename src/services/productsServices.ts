import { ParsedUrlQuery } from 'querystring';

import { product } from '@prisma/client';
import { AxiosRequestConfig } from 'axios';

export const getProducts = (
  query?: ParsedUrlQuery
): AxiosRequestConfig<product> => {
  return {
    url: '/api/product/getAll',
    method: 'GET',
    params: query,
  };
};
