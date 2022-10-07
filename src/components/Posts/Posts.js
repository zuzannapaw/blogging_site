import Post from "./Post";
import {
  PostsCard,
  PostsContainer,
} from "../styles/posts/PostsContainer.styled";
import { useContext } from "react";
import PostContext from "../../store/post-context";

const Posts = () => {
  const postCtx = useContext(PostContext);

  return (
    <PostsContainer>
      <PostsCard>
        {postCtx.posts.map((post) => {
          return (
            <Post
              title={post.title}
              description={post.description}
              author={post.author}
              key={post.id}
              id={post.id}
              isFav={post.isFav}
            />
          );
        })}
      </PostsCard>
    </PostsContainer>
  );
};

export default Posts;
