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

  @media (max-width: 600px) {
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
        rgb(0 0 0 / 90%),
        rgb(185 185 185 / 20%)
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

    &:before {
      content: "";
      position: absolute;
      width: 25%;
      height: 1px;
      right: 0;
      top: -10px;
      background-color: white;
    }

    &:after {
      content: "";
      position: absolute;
      width: 25%;
      height: 1px;
      left: 0;
      bottom: -12px;
      background-color: white;
    }

    @media (max-width: 600px) {
      max-width: 90%;
      font-size: 1.8rem;
      margin-top: 100px; // ~ navbar height
    }
  `}
`;

export const HeroSearchContainer = styled.div`
  /* position: absolute; */
  display: block;
  width: 100%;
  /* margin-top: 15rem; */
  /* bottom: 100px; */
`;
