import styled, { css } from "styled-components";

export const SearchBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    margin: 0 auto;
    background-color: #00000040;

    & input {
      flex: 1;
      color: white;
      font-size: ${theme.font.sizes.medium};
      padding: 0 1rem;
      background-color: transparent;
      border: none;
      outline: none;

      &:focus {
        border: 2px solid ${theme.colors.secondary};
      }
    }

    & button {
      justify-self: flex-end;
      margin: auto;
    }
  `}
`;
