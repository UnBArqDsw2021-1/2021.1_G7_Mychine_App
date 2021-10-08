import { product } from '@prisma/client';
import { AxiosRequestConfig } from 'axios';

export const getProducts = (): AxiosRequestConfig<product> => {
  return {
    url: '/api/product/getAll',
    method: 'GET',
  };
};
