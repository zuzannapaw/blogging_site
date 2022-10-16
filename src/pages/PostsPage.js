import PostSummary from "../components/Posts/PostsSummary";
import Posts from "../components/Posts/Posts";
import LogoutInfo from "../components/LogoutInfo/LogoutInfo";
import { useContext } from "react";
import PostContext from "../store/post-context";

const PostPage = () => {

  const postCtx = useContext(PostContext);

  return (
    <>
      {postCtx.isLoggedOut && <LogoutInfo/>}
      <PostSummary />
      <Posts/>
    </>
  );
};

export default PostPage;
