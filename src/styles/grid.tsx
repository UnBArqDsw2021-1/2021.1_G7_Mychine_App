import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${theme.spacings.large};
    max-width: 90%;
    margin: 0 auto;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  `}
`;
