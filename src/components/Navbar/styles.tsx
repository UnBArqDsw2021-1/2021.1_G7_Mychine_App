import styled, { css } from "styled-components";

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
  padding: 1rem 4rem;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-right: 4rem;
  cursor: pointer;
  color: #ff8520;
  text-shadow: 
        /* first layer at 1px */ -1px -1px 0px white,
    0px -1px 0px white, 1px -1px 0px white, -1px 0px 0px white,
    1px 0px 0px white, -1px 1px 0px white, 0px 1px 0px white, 1px 1px 0px white,
    /* second layer at 2px */ -2px -2px 0px white, -1px -2px 0px white,
    0px -2px 0px white, 1px -2px 0px white, 2px -2px 0px white,
    2px -1px 0px white, 2px 0px 0px white, 2px 1px 0px white, 2px 2px 0px white,
    1px 2px 0px white, 0px 2px 0px white, -1px 2px 0px white, -2px 2px 0px white,
    -2px 1px 0px white, -2px 0px 0px white, -2px -1px 0px white;
`;

export const NavLinks = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CustomLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: white;
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-shadow: 1px 1px 1px #333;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0px;
      border-radius: 10px;
      background-color: #ff8520;
      transition: all 0.25s ease-out;
    }
    &:hover {
      &:after {
        width: 100%;
        background-image: linear-gradient(to right, #f87000, #ff9a48);
      }
    }
  `}
`;
