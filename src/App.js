import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/Global";
import PostPage from "./pages/PostsPage";
import { Route, Routes } from "react-router";
import FavPage from "./pages/FavPage";
import LoginPage from "./pages/LoginPage";
import AddPostPage from "./pages/AddPostPage";
import Nav from "./components/Layout/Nav/Nav";
import Footer from "./components/Layout/Footer/Footer";
import { useContext, useState } from "react";
import { PostContent } from "./components/styles/posts/Post.styled";
import PostContext from "./store/post-context";


const theme = {
  colors: {
    nav: "#80deea",
    body: "#3a3a3a",
    footer: "#80deea",
  },
};

function App() {
  const postCtx = useContext(PostContext)

let user;
  postCtx.currAccount ? user = true : user = false;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav/>
        <Routes>
          <Route path="/" element={<PostPage />} />
          {user && <Route path="/favorites" element={<FavPage />} />}
          <Route path="/login"element={<LoginPage />} />
         {user && <Route path ="/add" element={<AddPostPage/>} />}
         <Route path="*" element ={<PostPage/>}/>
        </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
