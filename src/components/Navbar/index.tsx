import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';
import { FaUserCircle } from 'react-icons/fa';

import Button from '@components/Button';
import Logo from '@public/img/logo.svg';

import * as S from './styles';

const Navbar = () => {
  const [session] = useSession();

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
            {!session ? (
              <Link href="/login" passHref>
                <S.CustomLink highlight>
                  <FaUserCircle size={25} />
                  Entrar
                </S.CustomLink>
              </Link>
            ) : (
              <Button
                onClick={() =>
                  signOut({
                    redirect: false,
                    callbackUrl: `${window.location.origin}`,
                  })
                }
              >
                <FaUserCircle size={25} />
                Sair
              </Button>
            )}
          </S.Links>
        </S.NavLinks>
      </S.Navbar>
    </S.NavbarWrapper>
  );
};

export default Navbar;
