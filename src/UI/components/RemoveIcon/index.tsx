import { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { ICartItem, useCart } from '@contexts/Cart';
import { product } from '@prisma/client';

import * as S from './styles';

export interface IRemoveItemIconProps extends IconBaseProps {
  item: product;
}

const RemoveItemIcon = ({ item, ...props }: IRemoveItemIconProps) => {
  const { clearItem, findItem } = useCart();

  const inCartItem = useMemo(
    () => findItem(item as ICartItem),
    [findItem, item]
  );

  return <S.RemoveItemIcon onClick={() => clearItem(inCartItem)} {...props} />;
};

export default RemoveItemIcon;
