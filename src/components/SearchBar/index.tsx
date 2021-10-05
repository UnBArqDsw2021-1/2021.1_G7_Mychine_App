import { useForm } from 'react-hook-form';

import Button from '@components/Button';

import * as S from './styles';

const SearchBar = () => {
  const { register } = useForm();

  return (
    <S.SearchBar>
      <input {...register('search')} placeholder="" autoComplete="off" />
      <Button color="secondary" size="large">
        Buscar
      </Button>
    </S.SearchBar>
  );
};

export default SearchBar;
