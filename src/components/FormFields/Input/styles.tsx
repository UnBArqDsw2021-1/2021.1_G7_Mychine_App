import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: ${theme.spacings.medium};

    &:last-of-type {
      margin-bottom: calc(${theme.spacings.medium} * 2);
    }
  `}
`;

export const InputGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.85rem;
    color: ${theme.colors.darkGray400};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 24px;
    right: 0;
    width: 22px;
    color: ${theme.colors.red};
  `}
`;

export const Input = styled.input<{ icon: boolean }>`
  ${({ theme, icon }) => css`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${theme.colors.lightGray300};
    outline: 0;
    font-size: 1rem;
    color: ${theme.colors.darkGray};
    padding: 7px 0;
    padding-right: ${icon ? '24px' : '0'}; // icon width;
    background: transparent;
    transition: border-color 0.25s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ ${Label} {
      font-size: 1rem;
      cursor: text;
      top: 24px;
    }

    &:focus,
    &:not(:placeholder-shown) {
      border-image: linear-gradient(
        to right,
        ${theme.colors.primary},
        ${theme.colors.secondary}
      );
      border-image-slice: 1;
    }

    &:not(:placeholder-shown) {
      padding-bottom: 6px;
      border-width: 2px;

      &[type='password'] {
        font-family: caption;
        letter-spacing: 1px;

        ~ ${Label} {
          letter-spacing: 0px;
          font-family: Roboto;
        }
      }
    }

    &:focus {
      font-weight: ${theme.font.weight.semiBold};
      padding-bottom: 5px;
      border-width: 3px;

      ~ ${Label} {
        position: absolute;
        top: 0px;
        display: block;
        transition: 0.2s;
        font-size: 0.85rem;
        color: ${theme.colors.primary};
        font-weight: ${theme.font.weight.medium};
      }
    }

    &:required,
    &:invalid {
      box-shadow: none;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + 0.5px);
    right: 0;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.light};
  `}
`;
