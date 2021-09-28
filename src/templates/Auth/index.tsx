import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

export interface IAuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate = ({ children }: IAuthTemplateProps) => (
  <S.AuthContainer>
    <S.Container>
      <S.HeroImage>
        <Image src="/img/hero.jpg" layout="fill" objectFit="cover" />
      </S.HeroImage>
      <S.FormContainer>
        <Link href="/" passHref>
          <S.Logo>Mychine</S.Logo>
        </Link>
        {children}
      </S.FormContainer>
    </S.Container>
  </S.AuthContainer>
);

export default AuthTemplate;
