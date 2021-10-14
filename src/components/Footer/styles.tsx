import styled, { css } from 'styled-components';
import { hoverAnimation } from 'UI/animations';

export const Footer = styled.footer`
  ${({ theme }) => css`
    grid-area: footer;
    grid-column: 1/-1;
    padding: 20px;
    display: flex;
    background: ${theme.colors.white};
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      gap: calc(${theme.spacings.large} / 2);
      div:nth-child(2) {
        flex-direction: column;
      }
    }
  `}
`;
export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-flexbox;
    gap: 1rem;
    align-items: center;
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
  display: flex;
  align-items: center;
`;

export const CustomLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: black;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    cursor: pointer;
    ${hoverAnimation({
      strokeWidth: '2px',
    })}
  `}
`;
