import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'sidenav content';
  height: 100vh;
  width: 100%;
`;

export const SideNav = styled.div`
  ${({ theme }) => css`
    width: 320px;
    grid-area: sidenav;
    padding: 40px;
    background-color: white;
    box-shadow: ${theme.shadows.soft};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    margin-left: ${theme.spacings.medium};
  `}
`;
