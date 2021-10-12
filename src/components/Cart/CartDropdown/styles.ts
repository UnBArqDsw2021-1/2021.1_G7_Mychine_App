import styled, { css } from 'styled-components';

interface ICartDropdownProps {
  hidden: boolean;
}

const wrapperModifiers = (props: ICartDropdownProps) => {
  if (props.hidden)
    return css`
      opacity: 0;
      pointer-events: none;
    `;

  return css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `;
};

export const CartDropdown = styled.div<ICartDropdownProps>`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    display: flex;
    gap: ${theme.spacings.small};
    flex-direction: column;
    justify-content: center;
    width: 350px;
    padding: ${theme.spacings.base};
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
    transition: transform 0.2s ease-in, opacity ${theme.transition.default};

    &:before {
      content: '';
      position: absolute;
      border-right: 0.6rem solid transparent;
      border-left: 0.6rem solid transparent;
      border-bottom: 0.6rem solid ${theme.colors.white};
      top: -5px;
      right: 13px;
    }

    .cart-total {
      color: ${theme.colors.darkGray};
      font-weight: ${theme.font.weight.medium};
      text-align: right;
      margin-bottom: ${theme.spacings.xsmall};
    }

    .empty-message {
      color: ${theme.colors.lightGray100};
      font-weight: ${theme.font.weight.regular};
      pointer-events: none;
    }

    ${wrapperModifiers}
  `}
`;

export const CartItems = styled.div`
  ${({ theme }) => css`
    height: 220px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    margin: 0px -${theme.spacings.medium};
    padding: 0px ${theme.spacings.medium};
    overflow-y: auto;

    background:
    /* Shadow Cover TOP */ linear-gradient(
          white 30%,
          rgba(255, 255, 255, 0)
        )
        center top,
      /* Shadow Cover BOTTOM */
        linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom,
      /* Shadow TOP */
        radial-gradient(
          farthest-side at 50% 0,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0)
        )
        center top,
      /* Shadow BOTTOM */
        radial-gradient(
          farthest-side at 50% 100%,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0)
        )
        center bottom;

    background-repeat: no-repeat;
    background-size: calc(100% - ${theme.spacings.base}) 40px,
      calc(100% - ${theme.spacings.base}) 40px, 100% 14px, 100% 14px;
    background-attachment: local, local, scroll, scroll;
  `}

  /* Chrome, Safari, Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CartActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    text-align: right;

    color: ${theme.colors.darkGray400};
  `}
`;
