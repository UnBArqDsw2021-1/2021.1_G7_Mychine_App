import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends ButtonTypes {
  size?: 'small' | 'regular' | 'large';
  color?: 'primary' | 'secondary';
  shadow?: boolean;
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
}

const Button = ({ children, ...props }: IButtonProps) => {
  const {
    color = 'primary',
    size = 'regular',
    icon,
    shadow = true,
    fullWidth,
    minimal,
  } = props;

  const handleClick = (event) => {
    props?.onClick?.(event);

    // ripple effect
    // const button = event.currentTarget
    const button = event.currentTarget;
    const offset = button?.getBoundingClientRect();
    const newRipple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    newRipple.style.width = `${diameter}px`;
    newRipple.style.height = `${diameter}px`;
    newRipple.style.left = `${event.clientX - offset.left - radius}px`;
    newRipple.style.top = `${event.clientY - offset.top - radius}px`;
    newRipple.classList.add('ripple');

    // remove old ripple
    button.getElementsByClassName('ripple')[0]?.remove();

    button.appendChild(newRipple);
  };

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
      onClick={handleClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
