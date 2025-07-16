import { styled } from "styled-components";

export const SearchContainer = styled.form`
  max-width: 54rem;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.BASE_SUBTITLE};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.BASE_SPAN};
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & input {
    width: 100%;
    background-color: ${(props) => props.theme.BASE_INPUT};
    border: 1px solid ${(props) => props.theme.BASE_BORDER};
    padding: 0.75rem 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.BASE_TEXT};
  }

  & input::placeholder {
    color: ${(props) => props.theme.BASE_LABEL};
  }
`;
