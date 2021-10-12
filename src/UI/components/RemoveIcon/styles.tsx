import { MdRemoveShoppingCart } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const RemoveItemIcon = styled(MdRemoveShoppingCart)`
  ${({ theme }) => css`
    && {
      color: ${theme.colors.red};
      cursor: pointer;
    }
  `}
`;
