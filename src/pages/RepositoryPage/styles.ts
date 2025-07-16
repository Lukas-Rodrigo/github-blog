import styled from "styled-components";

export const RepositoryPageContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => props.theme.BASE_TEXT};
  }
`;
