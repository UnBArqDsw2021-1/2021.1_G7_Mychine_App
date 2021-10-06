import Checkbox from '@components/FormFields/Checkbox';

import * as S from './styles';

export interface FilterProps {
  name?: string;
  categoriesLabel: string[];
}

const ProductFilters = ({ ...props }: FilterProps) => {
  const categories: JSX.Element[] = [];
  const { name, categoriesLabel } = props;

  categoriesLabel.forEach((element) => {
    categories.push(
      <Checkbox
        name={element.replace(/ /g, '_').toLowerCase()}
        label={element}
      />
    );
  });

  return (
    <S.Container>
      <h4>{name}</h4>
      {categories}
    </S.Container>
  );
};

export default ProductFilters;
