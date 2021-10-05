/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css } from 'styled-components';
import blurEffect from 'UI/images/blur';

export const AuthContainer = styled.div`
  ${({ theme }) => css`
    --border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${theme.spacings.xlarge} 0;

    @media (max-width: 600px) {
      padding: ${theme.spacings.large} ${theme.spacings.base};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'form';
    /* width: 90%; */
    max-width: 1440px;
    border-radius: var(--border-radius);
    box-shadow: ${theme.shadows.large};
    background-color: white;

    @media (max-width: 1024px) {
      /* grid-template-columns: 1fr 0.9fr; */

      ${FormContainer} {
        padding: calc(${theme.spacings.medium}) ${theme.spacings.large};
      }
    }

    @media (max-width: 600px) {
      grid-template-areas: 'form form';

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
  ${blurEffect};
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
    display: inline-block;
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
    user-select: none;
    cursor: pointer;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    p {
      color: ${theme.colors.lightGray};
    }
  `}
`;
