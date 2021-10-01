import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
`;

export const ContentContainer = styled.div<{
  fullWidth?: boolean;
}>`
  ${({ fullWidth }) => css`
    grid-row: 1;
    grid-column: 1/-1;
    justify-self: center;
    width: ${fullWidth ? '100%' : '90%'};
    max-width: ${fullWidth ? '100%' : '1440px'};
  `}
`;
