import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import PostPage from "./pages/PostsPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Nav/Layout";
import FavPage from "./pages/FavPage";
import LoginPage from "./pages/LoginPage";
import AddPostPage from "./pages/AddPostPage";


const theme = {
  colors: {
    nav: "#736558",
    body: "#736558",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/favorites" element={<FavPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/add" element={<AddPostPage/>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
