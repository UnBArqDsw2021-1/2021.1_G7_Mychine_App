import styled, { css } from 'styled-components';

export const FilterbarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${theme.spacings.large};
    padding-top: 0;
  `}
`;

export const FilterBar = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: calc(91px + 4rem);
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.lightGray};
    background-color: white;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;

    button {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const FilterOption = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    transition: all ${theme.transition.fast};

    position: sticky;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.medium};
    }

    &:not(:first-child) {
      padding-top: ${theme.spacings.medium};
      border-top: 1px solid ${theme.colors.lightGray300};
    }

    & > label:first-child {
      display: inline-block;
      color: ${theme.colors.darkGray100};
      font-size: 0.9rem;
      margin-bottom: ${theme.spacings.small};
    }

    & > div:not(:last-child) {
      margin-bottom: calc(${theme.spacings.small});
    }
  `}
`;
