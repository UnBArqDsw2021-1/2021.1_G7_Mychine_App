import styled, { css } from 'styled-components';

export const SearchBar = styled.div<{
  variant: string;
  automaticSearch?: boolean;
}>`
  ${({ theme, variant, automaticSearch }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: ${automaticSearch ? '50px' : '55px'};
    background-color: ${variant === 'white' ? '#dddddd30' : 'white'};
    box-shadow: ${theme.shadows.soft};
    overflow: hidden;

    @media (max-width: 600px) {
      max-width: 90%;
      font-size: ${theme.font.sizes.base};
    }

    & input {
      flex: 1;
      height: 100%;
      color: ${theme.colors[variant]};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.medium};
      text-transform: capitalize;
      padding: 0 1rem;
      margin-right: ${automaticSearch ? '0' : '5px'};
      background-color: transparent;
      border: none;
      outline: none;

      &:focus {
        border: 3px solid ${theme.colors.secondary};
        border-image: linear-gradient(
          to right,
          ${theme.colors.secondary},
          ${theme.colors.secondary},
          #ff7300
        );
        border-image-slice: 1;
      }

      &::placeholder {
        color: ${theme.colors.lightGray100};
        font-weight: ${theme.font.weight.regular};
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
