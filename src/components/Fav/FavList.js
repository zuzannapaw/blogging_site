import { useContext } from "react";
import PostContext from "../../store/post-context";
import FavPost from "./FavPost";
import {
  PostsContainer,
  PostsCard,
} from "../styles/postsList/PostsContainer.styled";

import {EmptyFavList}  from "../styles/fav/Fav.styled";

const FavList = () => {
  const postCtx = useContext(PostContext);

  const favoritePosts = postCtx.currAccount? postCtx.currAccount.favorites : [];

  console.log(`FAV ${favoritePosts}`)

  const postsList = favoritePosts.map((post) => {
    return (
      <FavPost
        title={post.title}
        description={post.description}
        author={post.author}
        id={post.id}
        key={post.id}
        isFav = {post.isFav}
      />
    );
  })

  const content = favoritePosts.length === 0 ? "Empty here! Try to add favorite post!" : postsList

  return (
    <PostsContainer>
      <PostsCard>
        <EmptyFavList>
        {content}
        </EmptyFavList>
      </PostsCard>
    </PostsContainer>
  );
};

export default FavList;
