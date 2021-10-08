import { useRouter } from 'next/router';
import { product } from '@prisma/client';

import Loader from '@components/Loader';
import ProductCard from '@components/ProductCard';
import SearchBar from '@components/SearchBar';
import useRequest from '@hooks/useRequest';
import { getProducts } from '@services/productsServices';

import * as S from './styles';

const ProductList = () => {
  const router = useRouter();
  const { data, isLoading } = useRequest<product[]>(getProducts(router.query));

  return (
    <S.Content>
      <SearchBar automaticSearch color="darkGray" />
      {!isLoading ? (
        <S.ListContainer>
          {data?.map((item) => (
            <ProductCard {...item} />
          ))}
        </S.ListContainer>
      ) : (
        <Loader size="large" rings={3} />
      )}
    </S.Content>
  );
};

export default ProductList;
