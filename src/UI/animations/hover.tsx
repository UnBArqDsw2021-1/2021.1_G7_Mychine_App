/* eslint-disable @typescript-eslint/no-use-before-define */
import { css, keyframes } from 'styled-components';

export interface IHoverProps {
  strokeWidth?: string;
  position?: string;
  pseudoElement?: 'before' | 'after';
  blendMode?: string;
}

const hoverAnimation = ({
  strokeWidth = '2px',
  position = '0px',
}: IHoverProps) => css`
  position: relative;
  vertical-align: middle;

  &:before,
  &:after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    border: 1px solid transparent;
    width: 0;
    height: 0;

    border-image-slice: 1;
    --angle: 0deg;
    z-index: 1;
    pointer-events: none;
  }

  &:before {
    bottom: ${position}; // 1px?!!!
    left: ${position};
  }

  &:after {
    top: ${position};
    right: ${position};
    opacity: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
    animation: ${rotate} 3s ease-in-out infinite;
  }

  &:hover:before {
    border-image: conic-gradient(
        from var(--angle),
        #ef4647,
        #eb6a00,
        #ff8520,
        #ffa600,
        #ef4647
      )
      /* source */ 1 / /* slice */ ${strokeWidth} 0px 0px ${strokeWidth} /
      /* width */ 0px 0px 0px 0px /* outset */ round; /* repeat */
  }
  &:hover:after {
    opacity: 1;
    border-image: conic-gradient(
        from var(--angle),
        #ef4647,
        #eb6a00,
        #ff8520,
        #ffa600,
        #ef4647
      )
      /* source */ 1 / /* slice */ 0px ${strokeWidth} ${strokeWidth} 0px /
      /* width */ 0px 0px 0px 0px /* outset */ round; /* repeat */
  }

  &:hover:before {
    transition: height 0.11s ease-in, width 0.1s ease-in 0.11s;
  }

  &:hover:after {
    transition: height 0.11s ease-in 0.21s, width 0.1s ease-in 0.32s,
      opacity 0s linear 0.22s;
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;

export default hoverAnimation;

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const gradient = keyframes`
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
`;

export const rotate = keyframes`
  to {
    --angle: 360deg;
  }
`;
