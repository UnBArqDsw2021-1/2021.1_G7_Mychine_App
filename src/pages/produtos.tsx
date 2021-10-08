import { Box, Flex } from 'reflexbox/styled-components';

import ProductFilters from '@components/ProductFilters';
import ProductList from '@components/ProductList';
import PageTemplate from '@templates/Page';

const Products = () => {
  return (
    <PageTemplate fullWidth>
      <Flex flexWrap="wrap">
        <Box width={[0, 2 / 12]}>
          <ProductFilters />
        </Box>
        <Box width={[1, 10 / 12]}>
          <ProductList />
        </Box>
      </Flex>
    </PageTemplate>
  );
};

export default Products;
