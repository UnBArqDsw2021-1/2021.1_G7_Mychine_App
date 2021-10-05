import { css } from 'styled-components';

const darkenEffect = css`
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.6502976190476191) 0%,
      rgba(34, 34, 34, 0.35057773109243695) 100%
    );
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default darkenEffect;
