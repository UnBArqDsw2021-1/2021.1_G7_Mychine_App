import { useRef } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '@contexts/Cart';

import { useClickAway } from '@hooks/useClickAway';

import CardDropdown from '../CartDropdown';

import * as S from './styles';

const CartIcon = () => {
  const { toggleCart, cartItemsCount } = useCart();
  const ref = useRef(null);

  useClickAway(ref, () => toggleCart(true));

  return (
    <S.Wrapper ref={ref}>
      <S.CartIcon onClick={() => toggleCart()}>
        {cartItemsCount > 0 && (
          <S.Badge aria-label="Cart Items">{cartItemsCount}</S.Badge>
        )}
        <AiOutlineShoppingCart aria-label="Shopping cart" size={47} />
      </S.CartIcon>
      <CardDropdown />
    </S.Wrapper>
  );
};

export default CartIcon;
