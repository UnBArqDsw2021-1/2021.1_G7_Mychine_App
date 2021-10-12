import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import styled, { css } from 'styled-components';

export const CartItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    column-gap: ${theme.spacings.small};
    align-items: center;
    padding: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.soft};
  `}

  img {
    user-select: none;
  }
`;

export const ItemDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: ${theme.spacings.xsmall};

    p:first-child {
      font-size: 0.9rem;
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;

export const ItemActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    & > svg {
      &:last-child {
        margin-left: ${theme.spacings.base};
      }
    }
  `}
`;

export const ItemQuantity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    user-select: none;
    font-weight: ${theme.font.weight.medium};

    & svg {
      cursor: pointer;

      :hover {
        transform: scale(1.05);
      }

      :active {
        transform: scale(0.95);
      }
    }
  `}
`;

const disabledIconStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    background-color: ${theme.colors.darkGray400};
    pointer-events: none;
  `}
`;

export const PlusIcon = styled(HiPlusSm)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};
  `}
`;

export const MinusIcon = styled(HiMinusSm)<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};
    ${disabled && disabledIconStyles}
  `}
`;
