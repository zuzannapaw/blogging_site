import { useContext } from "react";
import PostContext from "../../store/post-context";
import FavPost from "./FavPost";
import {
  PostsContainer,
  PostsCard,
} from "../styles/postsList/PostsContainer.styled";

const FavList = () => {
  const postCtx = useContext(PostContext);

  const favoritePosts = postCtx.posts.filter((post) => post.isFav);
  console.log(favoritePosts)

  return (
    <PostsContainer>
      <PostsCard>
        {favoritePosts.map((post) => {
          return (
            <FavPost
              title={post.title}
              description={post.description}
              author={post.author}
              id={post.id}
              key={post.id}
            />
          );
        })}
      </PostsCard>
    </PostsContainer>
  );
};

export default FavList;
