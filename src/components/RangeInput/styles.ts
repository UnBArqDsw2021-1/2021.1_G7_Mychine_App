import { getTrackBackground } from 'react-range';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ITrackProps {
  min: number;
  max: number;
  values: number[];
}

export const RangeContainer = styled.div`
  display: block;
  padding: 2.2rem 0 1rem;
`;

export const Track = styled.div.attrs(
  ({ theme, min, max, values }: ITrackProps & { theme: DefaultTheme }) => {
    const colors =
      values.length === 1
        ? [theme.colors.primary, theme.colors.darkGray400]
        : [
            theme.colors.darkGray400,
            theme.colors.primary,
            theme.colors.darkGray400,
          ];

    return {
      trackBackground: getTrackBackground({
        values,
        colors,
        min,
        max,
      }),
    };
  }
)<ITrackProps>`
  ${({ theme, trackBackground }) => css`
    position: relative;
    height: 5px;
    width: 100%;
    border-radius: ${theme.border.radius};
    background: ${trackBackground};
  `}
`;

export const Thumb = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    outline: 1px solid ${theme.colors.darkGray400};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.soft};
    cursor: grab;

    &:focus {
      box-shadow: 0 0 1rem ${theme.colors.primary};
      outline: 1px solid ${theme.colors.primary};
    }
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -28px;
    padding: calc(${theme.spacings.xsmall} / 2);
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.medium};
  `}
`;
