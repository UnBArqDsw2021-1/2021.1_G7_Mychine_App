import { forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export interface IInputProps extends InputProps {
  name: string;
  label: string;
  icon?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { name, label, icon } = props;
  const methods = useFormContext();

  const error = methods?.formState?.errors[name];

  return (
    <S.InputWrapper>
      <S.InputGroup>
        <S.Input
          id={name}
          ref={ref}
          {...methods?.register(name)}
          {...props}
          placeholder={label}
          icon={icon || error}
        />
        <S.Label htmlFor={name}>{label}</S.Label>
        {error && (
          <S.Icon>
            <MdErrorOutline size={20} />
          </S.Icon>
        )}
      </S.InputGroup>
      {error && <S.Error>{error?.message}</S.Error>}
    </S.InputWrapper>
  );
});

export default Input;
