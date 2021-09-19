import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends ButtonTypes {
  size?: "small" | "regular" | "large";
  color?: "primary" | "secondary";
  shadow?: boolean;
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
}

const Button = ({ children, ...props }: IButtonProps) => {
  const {
    color = "primary",
    size = "regular",
    icon,
    shadow,
    fullWidth,
    minimal,
  } = props;

  return (
    <S.Button
      type="button"
      color={color}
      size={size}
      icon={icon}
      shadow={shadow}
      fullWidth={fullWidth}
      minimal={minimal}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
