import Navbar from '@components/Navbar';

import * as S from './styles';

// import Footer from "~/components/Footer";

export interface IBaseTemplateProps {
  children: React.ReactNode;
}

const BaseTemplate = ({ children }: IBaseTemplateProps) => (
  <S.Container>
    <Navbar />
    <S.Main>{children}</S.Main>
    {/* <Footer /> */}
  </S.Container>
);

export default BaseTemplate;
