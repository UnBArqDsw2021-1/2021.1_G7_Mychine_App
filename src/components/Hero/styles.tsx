import styled, { css } from 'styled-components';

import blurEffect from '@UI/images/blur';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 800px) {
    gap: 4rem;
  }

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    background-image: url(/img/hero.jpg);
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(0.8);
    pointer-events: none;
    z-index: -2;
    transition: all 45s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      filter: blur(8px);
    }
  }

  ${blurEffect};

  &:hover {
    &:before {
      transform: scale(1.15);
      transition: all 60s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

export const HeroTextContainer = styled.h1`
  ${({ theme }) => css`
    position: relative;
    width: fit-content;
    color: white;
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.black};
    text-shadow: 0px 0px 1px #222222f0;
    cursor: default;

    @media (max-width: 800px) {
      font-size: 1.8rem;
      font-weight: ${theme.font.weight.bold};
      margin-top: 100px; // ~ navbar height
    }

    &:before {
      content: '';
      position: absolute;
      width: 25%;
      height: 1px;
      left: 0;
      bottom: calc(100%);
      background-color: white;

      @media (max-width: 800px) {
        bottom: unset;
        top: 3px;
      }
    }

    &:after {
      content: '';
      position: absolute;
      width: 25%;
      height: 1px;
      right: 0;
      top: calc(100% + 0.9rem);
      background-color: white;

      @media (max-width: 800px) {
        top: unset;
        bottom: 3px;
      }
    }

    & span {
      position: absolute;
      left: 3px;
      top: calc(100%);
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.regular};
      text-shadow: 0;
      letter-spacing: 0.5px;

      @media (max-width: 800px) {
        font-weight: ${theme.font.weight.regular};
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;

export const HeroSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;
