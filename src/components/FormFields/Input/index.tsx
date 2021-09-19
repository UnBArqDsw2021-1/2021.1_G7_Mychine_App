import { InternalFieldErrors } from "react-hook-form";
import * as S from "./styles";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface IInputProps extends InputProps {
  label: string;
  errors: InternalFieldErrors;
  inputState?: "success" | "warning" | "info" | "error";
  icon?: string;
}

const Input = (props: IInputProps) => {
  const { name, label, errors } = props;

  return (
    <S.InputWrapper>
      <S.InputGroup>
        <S.Input id={name} {...props} />
        <S.Label htmlFor={name}>{label}</S.Label>
      </S.InputGroup>
      {errors && <span>{errors?.message}</span>}
    </S.InputWrapper>
  );
};

export default Input;
