import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-image: linear-gradient(340deg, #a3b3d0 0%, #e4efe9 100%);
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
