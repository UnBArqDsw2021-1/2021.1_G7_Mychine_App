import styled, { css } from 'styled-components';
import { hoverAnimation } from 'UI/animations';

export const NavbarWrapper = styled.div`
  grid-area: nav;
  grid-column: 1/-1;
  position: fixed;
  display: block;
  z-index: 1;
  width: 100%;
  background: transparent;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 4rem;

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
  }
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

export const NavLinks = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Links = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};

    @media (max-width: 600px) {
      gap: calc(${theme.spacings.large} / 2);
    }
  `}
`;

export const CustomLink = styled.a<{ highlight?: boolean }>`
  ${({ theme, highlight }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    padding: 1rem;
    color: white;
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-shadow: 1px 1px 1px #333;

    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.base};
      letter-spacing: 0.5px;
    }

    ${highlight &&
    css`
      box-shadow: inset 0 0 0px 2px white;
    `}

    ${hoverAnimation({
      strokeWidth: '2px',
    })}
  `}
`;
