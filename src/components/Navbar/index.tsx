import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../../public/img/logo.svg";
import * as S from "./styles";

const Navbar = () => {
  const router = useRouter();

  if (
    router.pathname.includes("/login") ||
    router.pathname.includes("/cadastro")
  )
    return null;

  return (
    <S.NavbarWrapper>
      <S.Navbar>
        <Link href="/" passHref>
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
        </Link>

        <S.NavLinks>
          <S.Links>
            <Link href="/" passHref>
              <S.CustomLink>Sobre</S.CustomLink>
            </Link>

            <Link href="/" passHref>
              <S.CustomLink>Contato</S.CustomLink>
            </Link>
          </S.Links>

          <S.Links>
            <Link href="/cadastro" passHref>
              <S.CustomLink>Registrar-se</S.CustomLink>
            </Link>
            <Link href="/" passHref>
              <S.CustomLink highlight>
                <FaUserCircle size={25} />
                Entrar
              </S.CustomLink>
            </Link>
          </S.Links>
        </S.NavLinks>
      </S.Navbar>
    </S.NavbarWrapper>
  );
};

export default Navbar;
