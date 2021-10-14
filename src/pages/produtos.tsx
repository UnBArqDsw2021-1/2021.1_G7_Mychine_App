import { FilterProvider } from '@contexts/Filter';

import Footer from '@components/Footer';
import ProductFilters from '@components/ProductFilters';
import ProductList from '@components/ProductList';
import PageTemplate from '@templates/Page';

import { Grid } from '@styles/grid';

const Products = () => {
  return (
    <FilterProvider>
      <PageTemplate fullWidth>
        <Grid>
          <ProductFilters />
          <ProductList />
        </Grid>
      </PageTemplate>
      <Footer />
    </FilterProvider>
  );
};

export default Products;
