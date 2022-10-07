import { useContext } from "react";
import { useNavigate } from "react-router";
import PostContext from "../../store/post-context"
import { PostSummaryStyled } from "../styles/posts/PostSummary.styled";

const PostSummary = () => {

  const postCtx = useContext(PostContext);
  const navigate = useNavigate();

  const postNowClick = () => {
    postCtx.currAccount ?  navigate('/add') : navigate('/login');

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
