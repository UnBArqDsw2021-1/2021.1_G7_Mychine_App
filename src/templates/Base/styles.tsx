import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  grid-template-areas:
    'nav'
    'main'
    'footer';
`;

export const Main = styled.main`
  grid-area: main;
  grid-column: 1/-1;
`;
