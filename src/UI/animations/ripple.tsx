import { css, keyframes } from "styled-components";

export type Color = "primary" | "secondary";

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const rippleAnimation = (color: Color = "primary") => css`
  ${({ theme }) => css`
    & .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ${ripple} 0.6s linear;
      background-color: ${theme.colors[color]};
      mix-blend-mode: screen;
      pointer-events: none;
    }
  `}
`;

export default rippleAnimation;
