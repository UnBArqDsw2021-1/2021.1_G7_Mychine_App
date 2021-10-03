import { lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';

export const Checkbox = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const ScaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
    outline: 0;
    border: none;
    border-radius: 0;
    background: ${theme.colors.primary};
    transition: all 0.2s;
    cursor: pointer;

    &:before {
      position: absolute;
      height: 100%;
      width: 100%;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.4rem' height='1.4rem' fill='none' stroke-width='2px' stroke='white' stroke-linecap='round' viewBox='0 0 21 21'%3E%3Cpolyline points='5 10.75 8.5 14.25 16 6'%3E%3C/polyline%3E%3C/svg%3E");
      transform: scale(0);
      background: ${theme.colors.primary};
      animation: ${ScaleIn} 0.1s 0.2s linear forwards;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: white;
      border-radius: inherit;
      box-shadow: inset 0 0 1px 0px ${theme.colors.darkGray100},
        inset 0 0 2px 0px ${theme.colors.darkGray300},
        inset 0 0 3px 0px ${theme.colors.lightGray100};
      transition: all 0.2s;
    }

    &:checked {
      box-shadow: 0 0 0.5rem ${theme.colors.primaryDark};

      &:after {
        transform: scale(0);
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: fit-content;
    padding: 0.05rem 0.25rem;
    margin-left: 0.25rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${lighten(0.375, theme.colors.primary)};
    }
  `}
`;
