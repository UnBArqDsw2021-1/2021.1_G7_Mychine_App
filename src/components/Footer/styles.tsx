import styled, { css } from 'styled-components';
// import { hoverAnimation } from 'UI/animations';

export const Footer = styled.footer`
  grid-area: footer;
  grid-column: 1/-1;
  justify-self: center;
  top: 8px;
  display: block;
  z-index: 1;
  background: #00000050;

  align-items: center;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-right: ${theme.spacings.xlarge};
    cursor: pointer;
    color: ${theme.colors.primary};
    text-shadow: 
        /* first layer at 1px */ -1px -1px 0px white,
      0px -1px 0px white, 1px -1px 0px white, -1px 0px 0px white,
      1px 0px 0px white, -1px 1px 0px white, 0px 1px 0px white,
      1px 1px 0px white, /* second layer at 2px */ -2px -2px 0px white,
      -1px -2px 0px white, 0px -2px 0px white, 1px -2px 0px white,
      2px -2px 0px white, 2px -1px 0px white, 2px 0px 0px white,
      2px 1px 0px white, 2px 2px 0px white, 1px 2px 0px white, 0px 2px 0px white,
      -1px 2px 0px white, -2px 2px 0px white, -2px 1px 0px white,
      -2px 0px 0px white, -2px -1px 0px white;

    @media (max-width: 600px) {
      margin-right: ${theme.spacings.large};
    }
  `}
`;

export const Links = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;

    gap: ${theme.spacings.large};

    @media (max-width: 600px) {
      gap: calc(${theme.spacings.large} / 2);
    }
  `}
`;

export const CustomLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    padding: 1rem;
    color: black;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-shadow: 1px 1px 1px #333;
    cursor: pointer;
  `}
`;
