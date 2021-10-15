import Image from 'next/image';

import SearchBar from '@components/SearchBar';

import * as S from './styles';

const Hero = () => (
  <S.HeroContainer>
    <Image
      src="/img/hero.webp"
      priority
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkCgEAAF4AWD0K18MAAAAASUVORK5CYII="
    />
    <S.Wrapper>
      <S.HeroTextContainer>
        Obra Mais que Certa<span>Encontre suas máquinas de construção.</span>
      </S.HeroTextContainer>
      <SearchBar variant="white" />
    </S.Wrapper>
  </S.HeroContainer>
);

export default Hero;
