import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-image: linear-gradient(
    337deg,
    rgb(248 212 182 / 55%) 0.5%,
    rgb(192 198 230 / 50%) 49%,
    rgb(225 246 240 / 30%) 99.8%
  );
  background-attachment: fixed;

  grid-template-areas:
    'nav'
    'main'
    'footer';
`;

export const Main = styled.main`
  grid-area: main;
  grid-column: 1/-1;
`;
