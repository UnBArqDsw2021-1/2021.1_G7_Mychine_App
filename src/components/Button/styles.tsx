import styled, { css, DefaultTheme } from 'styled-components';
import { rippleAnimation } from 'UI/animations';

import type { IButtonProps } from '.';

export type IButtonStyleProps = IButtonProps;

const buttonStylesModifiers = (theme: DefaultTheme) => ({
  size: {
    small: css`
      padding: 6px 20px;
      font-size: 0.9rem;
    `,
    regular: css`
      height: 55px;
    `,
    large: css`
      padding: 15px 45px;
      font-size: ${theme.font.sizes.medium};
    `,
  },
  color: {
    primary: css`
      background-image: linear-gradient(
        to right,
        #ff7100 0%,
        #ff8e32 51%,
        #ff7100 100%
      );
    `,
    secondary: css`
      background-image: linear-gradient(
        to right,
        #f7971e 0%,
        #ffd200 51%,
        #f7971e 100%
      );
    `,
  },
  shadow: css`
    box-shadow: ${theme.shadows.medium};
  `,
  fullWidth: css`
    width: 100%;
  `,
});

export const Button = styled.button<IButtonStyleProps>`
  ${({ theme, size, color, shadow, fullWidth }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 30px;

    color: white;
    font-size: ${theme.font.sizes.base};
    font-weight: ${theme.font.weight.semiBold};
    text-align: center;
    text-transform: uppercase;

    border: none;
    outline: none;
    border-radius: 0;
    background-size: 200% auto;

    cursor: pointer;
    user-select: none;
    overflow: hidden;

    transition: all 0.2s;
    transition: background 0.5s;

    &:hover {
      background-position: right center;
      text-decoration: none;
    }

    ${size && buttonStylesModifiers(theme).color[color]};
    ${size && buttonStylesModifiers(theme).size[size]};
    ${fullWidth && buttonStylesModifiers(theme).fullWidth};
    ${shadow && buttonStylesModifiers(theme).shadow};

    ${rippleAnimation(color)};
  `}
`;
