import Image from 'next/image';
import { ICartItem, useCart } from '@contexts/Cart';

import RemoveItemIcon from '@UI/components/RemoveIcon';

import * as S from './styles';

export interface ICartItemProps {
  item: ICartItem;
}

const CartItems = ({ item }: ICartItemProps) => {
  const { addItem, removeItem } = useCart();

  return (
    <S.CartItem>
      <Image
        src="/img/hero.jpg"
        width={50}
        height={50}
        alt="product image"
        objectFit="cover"
      />
      <S.ItemDetails>
        <p>{item.name}</p>
        <p>
          {item?.price
            ? item.price.toLocaleString(undefined, {
                style: 'currency',
                currency: 'brl',
              })
            : 'Gratis'}
        </p>
      </S.ItemDetails>
      <S.ItemActions>
        <S.ItemQuantity>
          <S.PlusIcon
            size={19}
            onClick={() =>
              addItem({
                ...item,
                quantity: 1,
              })
            }
          />
          <span>{item.quantity}</span>
          <S.MinusIcon
            size={19}
            onClick={() => removeItem(item)}
            disabled={item.quantity === 1}
          />
        </S.ItemQuantity>
        <RemoveItemIcon item={item} size={24} />
      </S.ItemActions>
    </S.CartItem>
  );
};

export default CartItems;
