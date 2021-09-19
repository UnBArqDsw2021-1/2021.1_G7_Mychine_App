import styled, { css, DefaultTheme } from "styled-components";
import { frameEnter, gradient } from "./animations";
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
    transition: 0.25s;

    &:active {
      opacity: 0.8;
    }

    ${size && buttonStylesModifiers(theme).size[size]};
    ${fullWidth && buttonStylesModifiers(theme).fullWidth};
    ${shadow && buttonStylesModifiers(theme).shadow};

    &:hover {
      &:after {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 0px;
        background: linear-gradient(120deg, #ef4647, #ff831e, #ef4647);
        background-size: 300% 300%;
        clip-path: polygon(
          0% 100%,
          3px 100%,
          3px 3px,
          calc(100% - 3px) 3px,
          calc(100% - 3px) calc(100% - 3px),
          3px calc(100% - 3px),
          3px 100%,
          100% 100%,
          100% 0%,
          0% 0%
        );
        animation: ${frameEnter} 0.275s forwards ease-in-out reverse,
          ${gradient} 3s ease-in-out infinite;
      }
    }
  `}
`;
