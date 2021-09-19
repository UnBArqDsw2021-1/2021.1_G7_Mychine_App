import { createGlobalStyle } from "styled-components";

export const TIMEOUT = 300;

const PageTransition = createGlobalStyle`
  .page-transition-enter {
    opacity: 0.85;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 200ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
`;

export default PageTransition;
