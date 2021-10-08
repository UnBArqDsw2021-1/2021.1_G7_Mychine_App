/* eslint-disable jsx-a11y/label-has-associated-control */
import Checkbox from '@components/FormFields/Checkbox';

import * as S from './styles';

const ProductFilters = () => {
  return (
    <S.FilterbarWrapper>
      <S.FilterBar>
        <S.FilterOption>
          <label>Ordenar por</label>
          <Checkbox name="sortby" label="Menor preço" />
          <Checkbox name="sortby2" label="Maior preço" />
        </S.FilterOption>
        <S.FilterOption>
          <label>Categoria</label>
          <Checkbox name="sortby3" label="Category 1" />
          <Checkbox name="sortby4" label="Category 2" />
          <Checkbox name="sortby4" label="Category 3" />
        </S.FilterOption>
      </S.FilterBar>
    </S.FilterbarWrapper>
  );
};

export default ProductFilters;
