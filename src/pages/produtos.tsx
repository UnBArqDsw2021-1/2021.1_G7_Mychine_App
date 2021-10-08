import { product } from '@prisma/client';
import { Box, Flex } from 'reflexbox/styled-components';

import Loader from '@components/Loader';
import ProductFilters from '@components/ProductFilters';
import ProductList from '@components/ProductList';
import useRequest from '@hooks/useRequest';
import { getProducts } from '@services/productsServices';
import PageTemplate from '@templates/Page';

const Products = () => {
  const { data, isLoading } = useRequest<product[]>(getProducts());

  return (
    <PageTemplate fullWidth>
      <Flex flexWrap="wrap">
        <Box width={[0, 2 / 12]}>
          <ProductFilters />
        </Box>
        <Box width={[1, 10 / 12]}>
          {isLoading ? <Loader /> : <ProductList products={data} />}
        </Box>
      </Flex>
    </PageTemplate>
  );
};

export default Products;
