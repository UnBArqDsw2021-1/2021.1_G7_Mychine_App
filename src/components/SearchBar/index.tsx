import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import useDebounce from '@hooks/useDebounce';

import * as S from './styles';

const SearchBar = ({ color = 'white' }) => {
  const router = useRouter();
  const { query } = router;
  const [value, setValue] = useState('');
  const { register } = useForm();

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
    <S.SearchBar color={color}>
      <input
        {...register('searchText')}
        onChange={(e) => {
          searchText.onChange(e);
          setValue(e.target.value);
          if (!e.target.value) {
            delete query.searchText;
            pushUrl(query);
          }
        }}
        placeholder="Buscar"
        autoComplete="off"
      />
      <Button color="secondary" size="large">
        Buscar
      </Button>
    </S.SearchBar>
  );
};

export default SearchBar;
