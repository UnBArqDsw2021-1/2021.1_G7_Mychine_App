/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css } from "styled-components";
import blurEffect from "UI/images/blur";

export const AuthContainer = styled.div`
  ${({ theme }) => css`
    --border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${theme.spacings.xlarge} 0;
    background-image: linear-gradient(
      337deg,
      rgb(248 212 182 / 55%) 0.5%,
      rgb(192 198 230 / 50%) 49%,
      rgb(225 246 240 / 30%) 99.8%
    );

    @media (max-width: 600px) {
      padding: ${theme.spacings.large} 0;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 0.65fr;
    grid-template-areas: "hero form";
    width: 90%;
    max-width: 1440px;
    border-radius: var(--border-radius);
    box-shadow: ${theme.shadows.large};
    background-color: white;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 0.9fr;

      ${FormContainer} {
        padding: calc(${theme.spacings.medium}) ${theme.spacings.large};
      }
    }

    @media (max-width: 600px) {
      grid-template-areas: "form form";

      ${FormContainer} {
        padding: calc(${theme.spacings.medium}) ${theme.spacings.large};
      }
    }
  `}
`;

export const HeroImage = styled.div`
  position: relative;
  grid-area: hero;
  /* min-width: 500px; */

  &,
  & img {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  &:after,
  &:before {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  ${blurEffect()};
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    grid-area: form;
    padding: calc(${theme.spacings.medium} * 2) ${theme.spacings.xlarge};
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background-image: white;
  `}
`;

export const Logo = styled.h6`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes.medium};
    margin: 0;
    background: linear-gradient(
      to right,
      #ff8520 0%,
      #f14745 51%,
      #f14745 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    cursor: pointer;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    h1 {
      line-height: 1;
      margin-bottom: ${theme.spacings.small};
    }

    p {
      color: ${theme.colors.darkGray400};
    }
  `}
`;

export const Redirect = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray400};
    margin-top: ${theme.spacings.large};
    text-align: center;

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.medium};
      margin-left: 2px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;