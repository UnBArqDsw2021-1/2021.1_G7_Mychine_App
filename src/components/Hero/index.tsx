import Image from 'next/image';

import SearchBar from '@components/SearchBar';

import * as S from './styles';

const Hero = () => (
  <S.HeroContainer>
    <S.Image>
      <Image
        src="/img/hero.webp"
        priority
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGNgAAIAAAUAAXpeqz8="
      />
    </S.Image>
    <S.Wrapper>
      <S.HeroTextContainer>
        Obra Mais que Certa<span>Encontre suas máquinas de construção.</span>
      </S.HeroTextContainer>
      <SearchBar variant="white" />
    </S.Wrapper>
  </S.HeroContainer>
);

export default Hero;
