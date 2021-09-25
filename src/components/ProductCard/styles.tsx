import styled, { css } from "styled-components";
import { hoverAnimation } from "UI/animations";

export const Card = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    border-bottom: 3px solid #ededed;

    color: ${theme.colors.darkGray};
    font-size: 1.9rem;
    font-weight: ${theme.font.weight.medium};

    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;

    & span {
      display: block;
      color: #b6b6b6;
      font-size: ${theme.font.sizes.base};
      font-weight: ${theme.font.weight.medium};
    }

    ${hoverAnimation({})}

    @media (max-width: 850px) {
      flex-direction: column;
    }
  `}
`;

export const Hero = styled.div`
  width: 200px;
`;

export const Content = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div {
    margin-right: 25px;
  }

  & span {
    display: block;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    & span {
      display: inline;

      &:after {
        content: ": ";
      }
    }
  }
`;

export const Year = styled.div`
  margin-left: 25px;
`;

export const Model = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};

    & span {
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.primary};
    }
  `};
`;

export const Price = styled.div``;
