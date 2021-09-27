import Image from "next/image";
import * as S from "./styles";

export interface IAuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate = ({ children }: IAuthTemplateProps) => (
  <S.AuthContainer>
    <S.Container>
      <S.HeroImage>
        <Image
          src="/img/hero.jpg"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </S.HeroImage>
      <S.FormContainer>
        <S.Logo>Mychine</S.Logo>
        {children}
      </S.FormContainer>
    </S.Container>
  </S.AuthContainer>
);

export default AuthTemplate;
