import Navbar from '@components/Navbar';

import * as S from './styles';

export interface IBaseTemplateProps {
  children: React.ReactNode;
}

const BaseTemplate = ({ children }: IBaseTemplateProps) => (
  <S.Container>
    <Navbar />
    <S.Main>{children}</S.Main>
  </S.Container>
);

export default BaseTemplate;
