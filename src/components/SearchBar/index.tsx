import Button from "components/Button";
import * as S from "./styles";

const SearchBar = () => (
  <S.SearchBar>
    <input />
    <Button color="secondary" shadow size="large">
      Buscar
    </Button>
  </S.SearchBar>
);

export default SearchBar;
