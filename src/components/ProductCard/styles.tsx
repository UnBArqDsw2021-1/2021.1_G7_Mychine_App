import { MdShoppingCart } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { hoverAnimation } from 'UI/animations';

export const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.base};

    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.weight.medium};
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
      rgb(60 64 67 / 15%) 0px 1px 3px 1px;
    background-color: white;
    overflow: hidden;

    ${hoverAnimation({})};
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    margin: -${theme.spacings.base};
    margin-bottom: ${theme.spacings.xsmall};
    cursor: pointer;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray200};
    font-size: 0.85rem;
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const Year = styled.div`
  margin-left: 25px;
`;

export const Model = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray100};
    cursor: pointer;
  `};
`;

export const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  svg {
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
      opacity: 0.9;
    }
  }
`;

export const Price = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.primary};

    & p {
      color: ${theme.colors.darkGray400};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.light};
    }

    & span:nth-child(odd) {
      position: relative;
      top: -7px;
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.regular};
    }

    & span:nth-child(2) {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;

export const CartIcon = styled(MdShoppingCart)``;
