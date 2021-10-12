import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useFilter } from '@contexts/Filter';

import Button from '@components/Button';
import useDebounce from '@hooks/useDebounce';

import * as S from './styles';

export interface ISearchbarProps {
  automaticSearch?: boolean;
  variant?: string;
}

const SearchBar = ({ variant, automaticSearch }: ISearchbarProps) => {
  const router = useRouter();
  const { filters, setFilters, removeFilter } = useFilter();
  const [value, setValue] = useState('');
  const { register, getValues } = useForm<{ searchText: string }>({
    defaultValues: {
      searchText: filters?.searchText,
    },
  });

  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(
    () =>
      debouncedValue && setFilters({ ...filters, searchText: debouncedValue }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedValue]
  );

  const searchText = register('searchText');

  return (
    <S.SearchBar variant={variant} automaticSearch={automaticSearch}>
      <input
        {...register('searchText')}
        onChange={(e) => {
          searchText.onChange(e);
          if (automaticSearch) {
            setValue(e.target.value);
            if (!e.target.value) {
              removeFilter('searchText');
            }
          }
        }}
        placeholder="Buscar"
        autoComplete="off"
      />
      {!automaticSearch ? (
        <Button
          onClick={() => {
            setFilters({ ...filters, searchText: getValues('searchText') });
            router.push('/produtos');
          }}
          color="secondary"
          size="large"
        >
          Buscar
        </Button>
      ) : (
        <BiSearchAlt2 size={30} />
      )}
    </S.SearchBar>
  );
};

export default SearchBar;
