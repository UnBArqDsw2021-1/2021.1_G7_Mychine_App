import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';
import { FaUserCircle } from 'react-icons/fa';

import Logo from '@public/img/logo.svg';

import * as S from './styles';

const Navbar = () => {
  const [session] = useSession();
  const { pathname } = useRouter();

  if (pathname.includes('login') || pathname.includes('registro')) return null;

  return (
    <S.NavbarWrapper position={pathname === '/' ? 'fixed' : 'sticky'}>
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
            {!session ? (
              <>
                <Link href="/registro" passHref>
                  <S.CustomLink highlight>Registrar-se</S.CustomLink>
                </Link>
                <Link href="/login" passHref>
                  <S.CustomLink>
                    <FaUserCircle size={25} />
                    Entrar
                  </S.CustomLink>
                </Link>
              </>
            ) : (
              <FaUserCircle
                size={35}
                onClick={() =>
                  signOut({
                    redirect: false,
                    callbackUrl: `${window.location.origin}`,
                  })
                }
              />
            )}
          </S.Links>
        </S.NavLinks>
      </S.Navbar>
    </S.NavbarWrapper>
  );
};

export default Navbar;
