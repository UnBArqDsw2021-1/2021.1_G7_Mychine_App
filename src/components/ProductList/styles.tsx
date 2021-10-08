import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: ${theme.spacings.large};
    padding-top: 0;
  `}
`;

export const ListContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};

    @media (max-width: 425px) {
      align-self: center;
    }
  `}
`;
