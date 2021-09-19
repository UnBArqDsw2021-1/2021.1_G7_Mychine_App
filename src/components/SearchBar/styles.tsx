import styled, { css } from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  width: 60%;
  height: 55px;
  margin: 0 auto;
  padding: 0.15rem;
  background-color: #ffffff55;

  & input {
    flex: 1;
    background-color: transparent;
    border: none;
  }

  & button {
    justify-self: flex-end;
    min-width: 150px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
