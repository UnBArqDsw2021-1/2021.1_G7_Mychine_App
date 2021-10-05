import styled, { css } from 'styled-components';

export const SearchBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: #dddddd30;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    overflow: hidden;

    @media (max-width: 600px) {
      max-width: 90%;
      font-size: ${theme.font.sizes.base};
    }

    & input {
      flex: 1;
      color: white;
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
