import styled, { css } from 'styled-components';

export const Signup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    & > button {
      margin-top: ${theme.spacings.medium};
    }

    & > span {
      color: ${theme.colors.red};
      font-weight: ${theme.font.weight.semiBold};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
