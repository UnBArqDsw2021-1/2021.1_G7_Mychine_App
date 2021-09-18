import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.svg";
import * as S from "./styles";

const Navbar = () => (
  <S.NavbarWrapper>
    <S.Navbar>
      <S.Logo>
        <Image
          src={Logo}
          width={75}
          height={75}
          objectFit="contain"
          alt="logo"
        />
        <h1>MYCHINE</h1>
      </S.Logo>

      <S.NavLinks>
        <S.Links>
          <Link href="/" passHref>
            <S.CustomLink href="/">Sobre</S.CustomLink>
          </Link>

          <Link href="/" passHref>
            <S.CustomLink href="/">Contato</S.CustomLink>
          </Link>
        </S.Links>

        <S.Links>
          <Link href="/" passHref>
            <S.CustomLink href="/">Registrar-se</S.CustomLink>
          </Link>
          <Link href="/" passHref>
            <S.CustomLink href="/">Entrar</S.CustomLink>
          </Link>
        </S.Links>
      </S.NavLinks>
    </S.Navbar>
  </S.NavbarWrapper>
);

export default Navbar;
