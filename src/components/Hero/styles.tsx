import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-evenly; */
  gap: 10rem;
  overflow: hidden;

  @media (max-width: 800px) {
    gap: 4rem;
  }

  /* &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    background-image: url(/img/hero.jpg);
    background-position: center;
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
  } */

  /* &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    pointer-events: none;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.6502976190476191) 0%,
      rgba(34, 34, 34, 0.35057773109243695) 100%
    );
    background-size: cover;
    z-index: -1;
    transition: all 40s linear;
  }

  &:hover {
    &:before {
      transform: scale(1.15);
      transition: all 60s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    &:after {
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
    }
  } */
`;

export const HeroBackground = styled.div`
  -webkit-transform: scale(1);
  transform: scale(1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  /* Enable GPU Rendering */
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    backdrop-filter: blur(2px);
    background-image: linear-gradient(
      to top,
      rgba(19, 21, 25, 0.5),
      rgba(19, 21, 25, 0.5)
    );
    background-position: center, center;
    background-repeat: no-repeat, repeat;
    z-index: 1;

    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      filter: blur(8px);
    }
  }

  &:after {
    background-image: url(/img/hero.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const HeroTextContainer = styled.h1`
  ${({ theme }) => css`
    position: relative;
    color: white;
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.black};
    text-shadow: 1px 1px 3px #222222f0;
    cursor: default;

    @media (max-width: 800px) {
      max-width: 90%;
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
  width: 100%;
`;
