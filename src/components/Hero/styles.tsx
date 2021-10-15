import styled, { css } from 'styled-components';

import blurEffect from '@UI/images/blur';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  user-select: none;

  @media (max-width: 800px) {
    gap: 4rem;
  }

  ${blurEffect};

  img {
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      filter: blur(7px) !important;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  z-index: 2;
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
