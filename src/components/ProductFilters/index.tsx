/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useFilter } from '@contexts/Filter';

import Button from '@components/Button';
import Checkbox from '@components/FormFields/Checkbox';
import RangeInput from '@components/RangeInput';

import * as S from './styles';

interface FormFields {
  orderByPrice: string;
  priceRange: { minPrice: number; maxPrice: number };
}

const ProductFilters = () => {
  const { filters, setFilters } = useFilter();
  const { register, watch, reset, setValue, getValues } = useForm<FormFields>();

  const priceRange = register('priceRange');
  const orderByPrice = register('orderByPrice');

  return (
    <S.FilterbarWrapper>
      <S.FilterBar>
        {Object?.keys(filters)?.length > 0 ? (
          <S.FilterOption>
            <Button
              size="small"
              onClick={() => {
                setFilters({});
                reset();
              }}
            >
              Limpar filtros
            </Button>
          </S.FilterOption>
        ) : null}
        <S.FilterOption>
          <label>Ordenar por</label>
          <Checkbox
            type="radio"
            value="ASC"
            label="Menor preço"
            {...orderByPrice}
            onChange={(e) => {
              orderByPrice.onChange(e);
              setFilters({
                ...filters,
                orderByPrice: getValues('orderByPrice'),
              });
            }}
            onClick={() => {
              if (getValues('orderByPrice') === 'ASC') {
                setValue('orderByPrice', null);
                delete filters.orderByPrice;
                setFilters({ ...filters });
              }
            }}
            checked={watch('orderByPrice') === 'ASC'} // NÃO TIRA!
          />
          <Checkbox
            type="radio"
            value="DESC"
            label="Maior preço"
            {...orderByPrice}
            onChange={(e) => {
              orderByPrice.onChange(e);
              setFilters({
                ...filters,
                orderByPrice: getValues('orderByPrice'),
              });
            }}
            onClick={() => {
              if (getValues('orderByPrice') === 'DESC') {
                setValue('orderByPrice', null);
                delete filters.orderByPrice;
                setFilters({ ...filters });
              }
            }}
          />
        </S.FilterOption>
        <S.FilterOption>
          <label>Preço</label>
          <RangeInput
            min={0}
            max={500}
            step={5}
            initialValue={[0, 500]}
            formatValue={(val) => `$${val}`}
            {...priceRange}
            onFinalChange={(prices) => {
              setValue('priceRange', {
                minPrice: prices[0],
                maxPrice: prices[1],
              });
              setFilters({
                ...filters,
                ...getValues('priceRange'),
              });
            }}
          />
        </S.FilterOption>
      </S.FilterBar>
    </S.FilterbarWrapper>
  );
};

export default ProductFilters;
