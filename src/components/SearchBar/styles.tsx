import styled, { css } from 'styled-components';

export const SearchBar = styled.div<{
  color: string;
  automaticSearch?: boolean;
}>`
  ${({ theme, color, automaticSearch }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: ${automaticSearch ? '45px' : '55px'};
    background-color: #dddddd30;
    box-shadow: ${theme.shadows.soft};
    overflow: hidden;

    @media (max-width: 600px) {
      max-width: 90%;
      font-size: ${theme.font.sizes.base};
    }

    & input {
      flex: 1;
      height: 100%;
      color: ${theme.colors[color]};
      font-size: ${theme.font.sizes.medium};
      padding: 0 1rem;
      margin-right: ${automaticSearch ? '0' : '5px'};
      background-color: transparent;
      border: none;
      outline: none;

      &:focus {
        border: 3px solid ${theme.colors.secondary};
      }

      @media (max-width: 600px) {
        margin-right: 0;
        font-size: ${theme.font.sizes.base};
      }
    }

    & button {
      position: absolute;
      right: 0;
      justify-self: flex-end;
      margin-left: auto;
    }

    & svg {
      position: absolute;
      right: 8px;
      color: ${theme.colors.darkGray400};
    }
  `}
`;
