import ProductFilters from '@components/ProductFilters';
import ProductList from '@components/ProductList';
import PageTemplate from '@templates/Page';

import { Grid } from '@styles/grid';

const Products = () => {
  return (
    <PageTemplate fullWidth>
      <Grid>
        <ProductFilters />
        <ProductList />
      </Grid>
    </PageTemplate>
  );
};

export default Products;
