import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import PostPage from "./pages/PostsPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";

const theme = {
  colors: {
    nav: "#a0816c",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<PostPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
