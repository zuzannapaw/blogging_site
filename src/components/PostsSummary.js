import { useNavigate } from "react-router";
import { PostSummaryStyled } from "./styles/postsList/PostSummary.styled";

const PostSummary = () => {

  const navigate = useNavigate()

  const postNowClick = () => {
    navigate('/login')

  }

  return (
    <PostSummaryStyled>
      <h1>Don't throw away your thoughts!</h1>
      <h2>Share it with us.</h2>
      <p>
        Join the biggest community of blogging in New York. We want to hear you.
      </p>
      <button onClick={postNowClick}>Post Now!</button>
    </PostSummaryStyled>
  );
};

export default PostSummary;
