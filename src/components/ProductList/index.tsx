import { useFilter } from '@contexts/Filter';
import { product } from '@prisma/client';

import Loader from '@components/Loader';
import ProductCard from '@components/ProductCard';
import SearchBar from '@components/SearchBar';
import useRequest from '@hooks/useRequest';
import { getProducts } from '@services/productsServices';

import * as S from './styles';

const ProductList = () => {
  const { filters } = useFilter();
  const { data, isLoading } = useRequest<product[]>(getProducts(filters));

  return (
    <S.Content>
      <SearchBar automaticSearch variant="darkGray" />
      {!isLoading ? (
        <S.ListContainer>
          {data?.map((item) => (
            <ProductCard {...item} />
          ))}
        </S.ListContainer>
      ) : (
        <Loader size="large" rings={2} />
      )}
    </S.Content>
  );
};

export default ProductList;
