import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GithubBlogProvider } from "./context/GithubBlog";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <BrowserRouter>
      <GithubBlogProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </GithubBlogProvider>
    </BrowserRouter>
  );
}

export default App;
