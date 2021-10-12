import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 50%;
  position: relative;

  @media (max-width: 600px) {
    position: unset;
  }
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.darkGray};
    border-radius: 50%;
    font-weight: ${theme.font.weight.medium};
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
    position: absolute;
    top: calc(-${theme.spacings.small} / 2);
    right: calc(-${theme.spacings.small} / 2);
    box-shadow: ${theme.shadows.soft};
  `}
`;

export const CartIcon = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      fill: ${theme.colors.white};
      background: linear-gradient(75deg, #ff8520 0%, #ff7300 51%, #f14745 100%);
      padding: ${theme.spacings.small};
      border-radius: 50%;
    }
  `}
`;
