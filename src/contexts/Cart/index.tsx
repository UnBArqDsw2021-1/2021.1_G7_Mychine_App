import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useState,
} from 'react';
import { product } from '@prisma/client';

export interface ICartItem extends product {
  quantity: number;
}

export type CartContextType = {
  cart: ICartItem[];
  addItem(item: ICartItem, quantity?: number): void;
  removeItem: Dispatch<ICartItem>;
  clearItem: Dispatch<ICartItem>;
  findItem(item: ICartItem): ICartItem | undefined;
  clearCart: Dispatch<[]>;
  hidden: boolean;
  toggleCart(state?: boolean): void;
  cartItemsCount: number;
  cartTotal: number;
};

export const cartContextDefaultValues: CartContextType = {
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  findItem: () => undefined,
  clearCart: () => {},
  hidden: true,
  toggleCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
};

export const CartContext = createContext<CartContextType>(
  cartContextDefaultValues
);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [hidden, setHidden] = useState(true);

  const findItem = (itemToFind: Omit<ICartItem, 'quantity'>) => {
    return cart.find((cartItem) => cartItem.productId === itemToFind.productId);
  };

  const addItem = (itemToAdd: ICartItem) => {
    const existingCartItem = findItem(itemToAdd);

    if (existingCartItem) {
      return setCart(
        cart.map((item) =>
          item.productId === itemToAdd.productId
            ? {
                ...item,
                quantity: item.quantity + (itemToAdd.quantity || 1),
              }
            : item
        )
      );
    }

    return setCart([
      ...cart,
      {
        ...itemToAdd,
        quantity: itemToAdd.quantity || 1,
      },
    ]);
  };

  const removeItem = (itemToRemove: ICartItem) => {
    const existingCartItem = findItem(itemToRemove);

    if (existingCartItem?.quantity === 1) {
      return cart;
    }

    return setCart(
      cart.map((item) =>
        item.productId === itemToRemove.productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const clearItem = (itemToClear: ICartItem) => {
    setCart(cart.filter((item) => item.productId !== itemToClear.productId));
  };

  const clearCart = () => setCart([]);

  const toggleCart = (state?: boolean) => {
    if (typeof state === 'boolean') {
      setHidden(state);
    } else setHidden(!hidden);
  };

  const cartItemsCount = useMemo(
    () => cart.reduce((count, item) => count + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce((total, item) => total + item.quantity * item.price || 0, 0),
    [cart]
  );

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          hidden,
          addItem,
          removeItem,
          clearItem,
          findItem,
          clearCart,
          toggleCart,
          cartItemsCount,
          cartTotal,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
