import { PostSummaryStyled } from "./styles/postsList/PostSummary.styled";

const PostSummary = () => {
  return (
    <PostSummaryStyled>
      <h1>Don't throw away your thoughts!</h1>
      <h2>Share it with us.</h2>
      <p>
        Join the biggest community of blogging in New York. We want to hear you.
      </p>
      <button>Post Now!</button>
    </PostSummaryStyled>
  );
};

export default PostSummary;
