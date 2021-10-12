import { useCart } from '@contexts/Cart';

import Button from '@components/Button';

import CartItem from '../CartItem';

import * as S from './styles';

const CartDropdown = () => {
  const { hidden, cart, cartTotal } = useCart();

  return (
    <S.CartDropdown hidden={hidden}>
      {cart.length ? (
        <>
          <S.CartItems>
            {cart.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </S.CartItems>
          <S.CartActions>
            <p>
              Total:{' '}
              <span className="cart-total">
                {cartTotal.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'brl',
                })}
              </span>
            </p>
            <Button color="secondary" fullWidth>
              GO TO CHECKOUT
            </Button>
          </S.CartActions>
        </>
      ) : (
        <p className="empty-message">Seu carrinho esta vazio</p>
      )}
    </S.CartDropdown>
  );
};

export default CartDropdown;
