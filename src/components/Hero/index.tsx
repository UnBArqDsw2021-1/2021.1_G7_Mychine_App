import SearchBar from '@components/SearchBar';

import * as S from './styles';

const Hero = () => (
  <S.HeroContainer>
    <S.Wrapper>
      <S.HeroTextContainer>
        Obra Mais que Certa<span>Encontre suas máquinas de construção.</span>
      </S.HeroTextContainer>
      <SearchBar color="white" />
    </S.Wrapper>
  </S.HeroContainer>
);

export default Hero;
