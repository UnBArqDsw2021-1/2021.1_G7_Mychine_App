import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  background-color: #00000040;

  & input {
    flex: 1;
    color: white;
    background-color: transparent;
    border: none;
  }

  & button {
    justify-self: flex-end;
    margin: auto;
  }
`;
