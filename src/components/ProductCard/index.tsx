import Image from 'next/image';
import Link from 'next/link';
import { product } from '@prisma/client';

import * as S from './styles';

export interface IProductCardProps extends product {}

const ProductCard = ({ name, price, description }: IProductCardProps) => {
  return (
    <S.Card>
      <Link href="/" passHref>
        <S.Image>
          <Image
            src="/img/hero.jpg"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </S.Image>
      </Link>
      <S.Model>{name}</S.Model>
      <S.Description>{description}</S.Description>
      <S.Price>
        <span>R$</span>
        <span>{parseInt(price as unknown as string, 10)}</span>
        <span>{((price % 100) * 100).toFixed(0)}</span>
      </S.Price>
    </S.Card>
  );
};

export default ProductCard;
