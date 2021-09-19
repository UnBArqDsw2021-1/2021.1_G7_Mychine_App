import styled, { css } from "styled-components";

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

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        to right top,
        rgb(10 10 10 / 75%) 45%,
        rgb(231 229 205 / 33%) 100%
      ),
      url(/img/hero.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;
    z-index: -2;
    transition: all 45s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(7px);
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    &:before {
      transform: scale(1.15);
      transition: all 45s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;

export const HeroTextContainer = styled.h1`
  ${({ theme }) => css`
    position: relative;
    color: white;
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.black};
    text-shadow: 2px 2px 4px #333;
    cursor: default;

    @media (max-width: 800px) {
      max-width: 90%;
      font-size: 1.8rem;
      font-weight: ${theme.font.weight.bold};
      margin-top: 100px; // ~ navbar height
    }

    &:before {
      content: "";
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
      content: "";
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
