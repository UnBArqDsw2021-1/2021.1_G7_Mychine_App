import { css } from "styled-components";

const blurEffect = () =>
  css`
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(34, 34, 34, 0.25) 100%
      );
      background-size: cover;
    }
  `;

export default blurEffect;
