import { keyframes } from "styled-components";

export const gradient = keyframes`
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
`;

export const frameEnter = keyframes`
  0% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      3px calc(100% - 3px),
      3px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 3px) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      100% 0%,
      0% 0%
    );
  }
  75% {
    -webkit-clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 0%,
      0% 0%
    );
  }
  100% {
    -webkit-clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      0% 100%
    );
  }
`;
