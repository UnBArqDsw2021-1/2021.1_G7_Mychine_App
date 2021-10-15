import { css } from 'styled-components';

const blurEffect = css`
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    pointer-events: none;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(34, 34, 34, 0.3) 100%
    );
    background-size: cover;

    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      filter: blur(8px);
    }
  }
`;

export default blurEffect;
