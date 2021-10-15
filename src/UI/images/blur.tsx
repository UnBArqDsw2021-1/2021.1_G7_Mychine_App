import { css } from 'styled-components';

const blurEffect = css`
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    pointer-events: none;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(34, 34, 34, 0.3) 100%
    );
    background-size: cover;
    /* z-index: -1; */
    transition: all 40s linear;
  }

  &:hover {
    &:after {
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
    }
  }
`;

export default blurEffect;
