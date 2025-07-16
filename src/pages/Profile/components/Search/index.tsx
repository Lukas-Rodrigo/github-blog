import { SearchContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <input placeholder="Buscar conteúdo" type="text" />
    </SearchContainer>
  );
}
