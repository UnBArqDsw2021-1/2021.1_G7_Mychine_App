import styled, { css } from 'styled-components';

export interface IPageStyleProps {
  fullWidth?: boolean;
  center?: boolean;
}

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  /* min-height: 100vh; */
`;

export const ContentContainer = styled.div<IPageStyleProps>`
  ${({ center, fullWidth }) => css`
    grid-row: 1;
    grid-column: 1/-1;
    justify-self: ${center ? 'center' : 'unset'};
    align-self: ${center ? 'center' : 'unset'};
    max-width: ${fullWidth ? 'unset' : '1440px'};
  `}
`;
