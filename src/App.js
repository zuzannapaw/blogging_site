import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import PostPage from "./pages/PostsPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import FavPage from "./pages/FavPage";


const theme = {
  colors: {
    nav: "#736558"
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<PostPage/>} />
          <Route path="/favourites" element={<FavPage/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
