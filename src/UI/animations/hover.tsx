/* eslint-disable @typescript-eslint/no-use-before-define */
import { css, keyframes } from "styled-components";

export interface IHoverProps {
  strokeWidth?: string;
  position?: string;
  pseudoElement?: "before" | "after";
  blendMode?: string;
}

const hoverAnimation = ({
  strokeWidth = "3px",
  position = "0px",
  pseudoElement = "after",
  blendMode = "normal",
}: IHoverProps) => css`
  &:hover {
    &${`:${pseudoElement}`} {
      content: "";
      position: absolute;
      top: ${position};
      left: ${position};
      right: ${position};
      bottom: ${position};
      border-radius: 0px;
      background: linear-gradient(
        120deg,
        #f2ff00,
        #ff8520,
        #ef4647,
        #ff6600,
        #ffd900
      );
      background-size: 300% 300%;
      mix-blend-mode: ${blendMode};
      clip-path: polygon(
        0% 100%,
        ${strokeWidth} 100%,
        ${strokeWidth} ${strokeWidth},
        calc(100% - ${strokeWidth}) ${strokeWidth},
        calc(100% - ${strokeWidth}) calc(100% - ${strokeWidth}),
        ${strokeWidth} calc(100% - ${strokeWidth}),
        ${strokeWidth} 100%,
        100% 100%,
        100% 0%,
        0% 0%
      );
      animation: ${frameEnter(strokeWidth)} 0.275s forwards ease-in reverse,
        ${gradient} 3s ease-in-out infinite;
    }
  }
`;

export default hoverAnimation;

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

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

export const frameEnter = (strokeWidth: string) => keyframes`
  0% {
    clip-path: polygon(
      0% 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) calc(100% - ${strokeWidth}),
      ${strokeWidth} calc(100% - ${strokeWidth}),
      ${strokeWidth} 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) calc(100% - ${strokeWidth}),
      calc(100% - ${strokeWidth}) calc(100% - ${strokeWidth}),
      calc(100% - ${strokeWidth}) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      calc(100% - ${strokeWidth}) ${strokeWidth},
      100% 0%,
      0% 0%
    );
  }
  75% {
    -webkit-clip-path: polygon(
      0% 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} ${strokeWidth},
      ${strokeWidth} 0%,
      0% 0%
    );
  }
  100% {
    -webkit-clip-path: polygon(
      0% 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      ${strokeWidth} 100%,
      0% 100%
    );
  }
`;
