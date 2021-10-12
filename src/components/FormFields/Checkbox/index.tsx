import { forwardRef, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { Error } from '@components/FormFields/Input/styles';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export interface ICheckboxProps extends InputProps {
  name: string;
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { name, label } = props;
  const methods = useFormContext();

  const error = methods?.formState?.errors[name];

  return (
    <S.Checkbox>
      <S.Input
        type="checkbox"
        id={name + props?.value}
        ref={ref}
        {...methods?.register(name)}
        {...props}
      />
      <S.Label htmlFor={name + props?.value}>{label}</S.Label>
      {error && <Error>{error?.message}</Error>}
    </S.Checkbox>
  );
});

export default Checkbox;
