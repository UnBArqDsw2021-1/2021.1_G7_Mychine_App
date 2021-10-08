import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
