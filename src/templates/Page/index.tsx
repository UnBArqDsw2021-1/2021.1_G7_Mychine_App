import { ReactNode } from 'react';

import * as S from './styles';

export interface IPageTemplateProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const PageTemplate = ({ children, fullWidth }: IPageTemplateProps) => {
  return (
    <S.PageContainer>
      <S.ContentContainer fullWidth={fullWidth}>{children}</S.ContentContainer>
    </S.PageContainer>
  );
};

export default PageTemplate;
