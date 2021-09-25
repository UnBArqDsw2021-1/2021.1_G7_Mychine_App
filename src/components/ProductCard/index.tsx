import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export interface CardProps {
  imgSrc: string;
  year: string;
  brand: string;
  model: string;
  dayPrice: string;
  weekPrice: string;
}

const ProductCard = (props: CardProps) => {
  const { year, brand, model, dayPrice, weekPrice, imgSrc } = props;

  return (
    <Link href="/" passHref>
      <S.Card>
        <S.Hero>
          <Image
            src={imgSrc}
            width="100%"
            height="80%"
            layout="responsive"
            objectFit="cover"
          />
        </S.Hero>
        <S.Content>
          <S.Year>
            <span>Ano</span>
            {year}
          </S.Year>
          <S.Model>
            <span>{brand}</span>
            {model}
          </S.Model>
          <S.Price>
            <span>Aluguel</span>
            {dayPrice}
          </S.Price>
          <S.Price>
            <span>A partir de 10 dias</span>
            {weekPrice}
          </S.Price>
        </S.Content>
      </S.Card>
    </Link>
  );
};

export default ProductCard;
