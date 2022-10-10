import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import PostPage from "./pages/PostsPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Nav/Layout";
import FavPage from "./pages/FavPage";
import LoginPage from "./pages/LoginPage";
import AddPostPage from "./pages/AddPostPage";
import Nav from "./components/Layout/Nav/Nav";
import Footer from "./components/Layout/Footer/Footer";


const theme = {
  colors: {
    nav: "#80deea",
    body: "#3a3a3a",
    footer: "#80deea",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav/>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/favorites" element={<FavPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/add" element={<AddPostPage/>} />
        </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
