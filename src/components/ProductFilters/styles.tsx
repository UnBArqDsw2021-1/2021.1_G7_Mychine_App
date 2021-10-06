import styled from 'styled-components';

import { Checkbox } from '@components/FormFields/Checkbox/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 25px;

  ${Checkbox} {
    margin-top: 5px;
  }
`;
