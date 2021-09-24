import styled, { css, DefaultTheme } from "styled-components";
import { hoverAnimation, rippleAnimation } from "@UI/animations";
import type { IButtonProps } from ".";

export type IButtonStyleProps = IButtonProps;

const buttonStylesModifiers = (theme: DefaultTheme) => ({
  size: {
    small: css`
      height: 35px;
      padding: 6px 12px;
      font-size: 0.9rem;
      letter-spacing: 0;
    `,
    regular: css`
      height: 45px;
    `,
    large: css`
      height: 55px;
      font-size: ${theme.font.sizes.medium};
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
    padding: 12px 24px;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.base};
    font-weight: ${theme.font.weight.semiBold};
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    background: ${theme.colors[color]};
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    transition: 0.25s;

    ${size && buttonStylesModifiers(theme).size[size]};
    ${fullWidth && buttonStylesModifiers(theme).fullWidth};
    ${shadow && buttonStylesModifiers(theme).shadow};

    ${rippleAnimation(color)}
    ${hoverAnimation({
      strokeWidth: "4px",
      position: "-1px",
    })}
  `}
`;
