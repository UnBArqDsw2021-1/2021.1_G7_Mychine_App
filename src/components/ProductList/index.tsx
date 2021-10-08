import { product } from '@prisma/client';

import ProductCard from '@components/ProductCard';
import SearchBar from '@components/SearchBar';

import * as S from './styles';

export interface IProductListProps {
  products: product[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <S.Content>
      <SearchBar />
      <S.ListContainer>
        {products?.map((item) => (
          <ProductCard {...item} />
        ))}
      </S.ListContainer>
    </S.Content>
  );
};

export default ProductList;
