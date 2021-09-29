import styled, { css } from 'styled-components';

export const Signup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    & form > p {
      color: red;
      margin-bottom: calc(${theme.spacings.medium} * 2);
    }
  `}
`;
