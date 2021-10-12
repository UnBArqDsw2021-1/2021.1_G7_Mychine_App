import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';

import Button from '@components/Button';
import useDebounce from '@hooks/useDebounce';

import * as S from './styles';

export interface ISearchbarProps {
  automaticSearch?: boolean;
  variant?: string;
}

const SearchBar = ({ variant, automaticSearch }: ISearchbarProps) => {
  const router = useRouter();
  const { query } = router;
  const [value, setValue] = useState('');
  const { register, getValues } = useForm<{ searchText: string }>({
    defaultValues: {
      searchText: query?.searchText as string,
    },
  });

  const debouncedValue = useDebounce<string>(value, 500);

  const pushUrl = useCallback(
    (params) => {
      router.push(
        {
          pathname: '/produtos',
          query: { ...params },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const setParams = useCallback(
    (param, paramValue: string | number) => {
      pushUrl({ ...query, [param]: paramValue });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pushUrl]
  );

  useEffect(
    () => debouncedValue && setParams('searchText', debouncedValue),
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
              delete query.searchText;
              pushUrl(query);
            }
          }
        }}
        placeholder="Buscar"
        autoComplete="off"
      />
      {!automaticSearch ? (
        <Button
          onClick={() => setParams('searchText', getValues('searchText'))}
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
