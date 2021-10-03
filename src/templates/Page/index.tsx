import { ReactNode } from 'react';

import { IPageStyleProps } from './styles';
import * as S from './styles';

export interface IPageTemplateProps extends IPageStyleProps {
  children: ReactNode;
}

const PageTemplate = ({ children, fullWidth, center }: IPageTemplateProps) => {
  return (
    <S.PageContainer>
      <S.ContentContainer center={center} fullWidth={fullWidth}>
        {children}
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default PageTemplate;
