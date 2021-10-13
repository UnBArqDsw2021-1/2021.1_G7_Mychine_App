import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { IoGlobeOutline } from 'react-icons/io5';

import Logo from '@public/img/logo.svg';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <Link href="/" passHref>
        <S.Logo>
          <Image
            src={Logo}
            width={50}
            height={50}
            objectFit="contain"
            alt="logo"
          />
          <h2>MYCHINE</h2>
        </S.Logo>
      </Link>
      <S.Links>
        <Link href="/" passHref>
          <S.CustomLink> Termos de uso </S.CustomLink>
        </Link>
        <Link
          href="https://unbarqdsw2021-1.github.io/2021.1_G7_Mychine_docs/"
          passHref
        >
          <S.CustomLink> Documentação </S.CustomLink>
        </Link>
        <Link
          href="https://github.com/UnBArqDsw2021-1/2021.1_G7_Mychine_App"
          passHref
        >
          <S.CustomLink> Repositório</S.CustomLink>
        </Link>
        <Link href="/" passHref>
          <S.CustomLink> Sobre </S.CustomLink>
        </Link>
      </S.Links>
      <S.Links>
        <Link
          href="https://github.com/UnBArqDsw2021-1/2021.1_G7_Mychine_App"
          passHref
        >
          <S.CustomLink>
            {' '}
            <AiFillGithub color="black" size={30} />{' '}
          </S.CustomLink>
        </Link>
        <Link
          href="https://unbarqdsw2021-1.github.io/2021.1_G7_Mychine_docs/"
          passHref
        >
          <S.CustomLink>
            {' '}
            <IoGlobeOutline color="black" size={30} />{' '}
          </S.CustomLink>
        </Link>
      </S.Links>
    </S.Footer>
  );
};
export default Footer;
