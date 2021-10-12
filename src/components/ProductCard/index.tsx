import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ICartItem, useCart } from '@contexts/Cart';
import { product } from '@prisma/client';
import { Flex } from 'reflexbox';

import RemoveItemIcon from '@UI/components/RemoveIcon';

import * as S from './styles';

export type IProductCardProps = product;

const ProductCard = (item: IProductCardProps) => {
  const { addItem, findItem } = useCart();

  const { name, price, description } = item;

  const inCartItem = useMemo(
    () => findItem(item as ICartItem),
    [findItem, item]
  );

  return (
    <S.Card>
      <Link href="/" passHref>
        <S.Image>
          <Image
            src="/img/hero.webp"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGNgAAIAAAUAAXpeqz8="
          />
        </S.Image>
      </Link>
      <S.PriceContainer>
        <S.Price>
          <span>R$</span>
          <span>{Math.trunc(price)}</span>
          <span>{((price % 1) * 100).toFixed(0)}</span>
        </S.Price>
        <Flex>
          {inCartItem ? (
            <RemoveItemIcon item={item} size={30} />
          ) : (
            <>
              <svg width="0" height="0">
                <linearGradient
                  id="svg-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#f14745" offset="0%" />
                  <stop stopColor="#ff7300" offset="51%" />
                  <stop stopColor="#ff8520" offset="100%" />
                </linearGradient>
              </svg>
              <S.CartIcon
                size={30}
                onClick={() => addItem({ ...item, quantity: 1 })}
                style={{ fill: 'url(#svg-gradient)' }}
              />
            </>
          )}
        </Flex>
      </S.PriceContainer>
      <S.Model>{name}</S.Model>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default ProductCard;
