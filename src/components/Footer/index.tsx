import Image from 'next/image';
import Link from 'next/link';

import Logo from '@public/img/logo.svg';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.Logo>
        <Image
          src={Logo}
          width={50}
          height={50}
          objectFit="contain"
          alt="logo"
        />
        <h3>MYCHINE</h3>
      </S.Logo>
      <S.Links>
        <Link href="/" passHref>
          Termos de uso
        </Link>
        <Link href="/" passHref>
          Documentação
        </Link>
        <Link href="/" passHref>
          Repositório
        </Link>
        <Link href="/" passHref>
          Sobre
        </Link>
      </S.Links>
    </S.Footer>
  );
};
export default Footer;
