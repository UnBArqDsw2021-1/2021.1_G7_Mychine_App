import { useEffect } from 'react';
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

  const { register, getValues, setValue, watch } = useForm<{
    searchText: string;
  }>({
    defaultValues: {
      searchText: filters?.searchText || '',
    },
  });
  const searchText = register('searchText');

  useEffect(() => {
    if (!filters?.searchText) {
      setValue('searchText', '');
    }
  }, [filters, setValue]);

  // const debouncedValue = useDebounce<string>(value, 500);
  const debouncedValue = useDebounce<string>(watch('searchText'), 500);

  useEffect(
    () =>
      debouncedValue && setFilters({ ...filters, searchText: debouncedValue }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedValue]
  );

  return (
    <S.SearchBar variant={variant} automaticSearch={automaticSearch}>
      <input
        {...register('searchText')}
        onChange={(e) => {
          if (automaticSearch) {
            if (!e.target.value) {
              removeFilter('searchText');
            }
            searchText.onChange(e);
          }
        }}
        placeholder="Buscar"
        autoComplete="off"
      />
      {!automaticSearch ? (
        <Button
          onClick={() => {
            const value = getValues('searchText');
            setFilters({ searchText: value });
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
