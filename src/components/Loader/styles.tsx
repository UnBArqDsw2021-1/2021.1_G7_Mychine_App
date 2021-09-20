import styled, { css, keyframes } from "styled-components";
import type { ILoaderProps } from ".";

export const spin = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const tiltSpin = keyframes`
  from {
    transform: rotateY(0) rotateX(30deg);
  }
  to {
    transform: rotateY(360deg) rotateX(30deg);
  }
`;

const sizesMap = {
  small: 0.8,
  regular: 1,
  large: 1.55,
};

export const Loader = styled.div`
  display: flex;
  animation: ${tiltSpin} 8s linear infinite;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 17em;
  height: 17em;
  transform-style: preserve-3d;
`;

export const Ring = styled.div<{ size: ILoaderProps["size"] }>`
  ${({ theme, size }) => css`
    transform-style: preserve-3d;
    animation: ${spin} 4s linear infinite;
    font-size: calc(${theme.font.sizes.base} * ${sizesMap[size]});
    position: relative;
    height: calc(1.5rem * ${sizesMap[size]});
    width: calc(0.75rem * ${sizesMap[size]});
    &:nth-child(even) {
      animation-direction: reverse;
    }
  `}
`;

export const transformSectors = (size, ringSectors, radius) => {
  let cssString = "";
  for (let s = 2; s <= ringSectors; s += 1) {
    const angle = (360 / ringSectors) * (s - 1);
    cssString = cssString.concat(
      `&:nth-child(${s}) { transform: rotateY(${angle}deg) translateZ(calc(${radius} * ${sizesMap[size]}))}`
    );
  }
  return cssString;
};

// transform: scale(5) on first element to make it float in the middle
export const Sectors = styled.div<Pick<ILoaderProps, "ringSectors" | "size">>`
  ${({ theme, size, ringSectors, radius }) => css`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${theme.colors.darkGray100};
    font-weight: ${theme.font.weight.semiBold};
    text-transform: uppercase;
    transform: translateZ(calc(${radius} * ${sizesMap[size]}));

    &:empty:before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        transparent 45%,
        ${theme.colors.green} 45% 55%,
        transparent 55%
      );
    }
    ${transformSectors(size, ringSectors, radius)};
  `}
`;
