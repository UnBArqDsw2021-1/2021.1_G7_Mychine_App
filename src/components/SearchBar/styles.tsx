import styled, { css } from 'styled-components';

export const SearchBar = styled.div<{ color: string }>`
  ${({ theme, color }) => css`
    display: flex;
    width: 100%;
    background-color: #dddddd30;
    box-shadow: ${theme.shadows.soft};
    overflow: hidden;

    @media (max-width: 600px) {
      max-width: 90%;
      font-size: ${theme.font.sizes.base};
    }

    & input {
      flex: 1;
      color: ${theme.colors[color]};
      font-size: ${theme.font.sizes.medium};
      padding: 0 1rem;
      margin-right: 5px;
      background-color: transparent;
      border: none;
      outline: none;

      &:focus {
        border: 2px solid ${theme.colors.secondary};
      }

      @media (max-width: 600px) {
        margin-right: 0;
        font-size: ${theme.font.sizes.base};
      }
    }

    & button {
      justify-self: flex-end;
      margin-left: auto;
    }
  `}
`;
