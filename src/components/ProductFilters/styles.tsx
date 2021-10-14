import styled, { css } from 'styled-components';

export const FilterbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FilterBar = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: calc(91px + 4rem);
    display: flex;
    flex-direction: column;
    min-width: 250px;
    padding: ${theme.spacings.large};
    border-radius: 5px;
    background-color: white;
    box-shadow: ${theme.shadows.large};
    margin-bottom: ${theme.spacings.medium};

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
