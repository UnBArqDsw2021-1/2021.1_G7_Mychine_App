import * as S from './styles';

export interface ListProps {
  productFilters: JSX.Element | JSX.Element[];
  productCard: JSX.Element | JSX.Element[];
}

const ProductList = ({ ...props }: ListProps) => {
  const { productFilters, productCard } = props;

  return (
    <>
      <S.Grid>
        <S.SideNav>{productFilters}</S.SideNav>
        <S.Content>{productCard}</S.Content>
      </S.Grid>
    </>
  );
};

export default ProductList;
