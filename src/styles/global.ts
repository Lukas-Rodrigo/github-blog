import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.BASE_BORDER};
  }

  body {
    background-color: ${(props) => props.theme.BASE_BACKGROUND};
    color: ${(props) => props.theme.BASE_TEXT};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito";

  }
`;
