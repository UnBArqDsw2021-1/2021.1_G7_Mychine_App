import SearchBar from "components/SearchBar";
import * as S from "./styles";

const Hero = () => (
  <S.HeroContainer>
    <S.HeroTextContainer>
      Obra Mais que Certa<span>Encontre suas máquinas de construção.</span>
    </S.HeroTextContainer>
    <S.HeroSearchContainer>
      <SearchBar />
    </S.HeroSearchContainer>
  </S.HeroContainer>
);

export default Hero;
