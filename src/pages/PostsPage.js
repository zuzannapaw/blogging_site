import PostSummary from "../components/Posts/PostsSummary";
import Posts from "../components/Posts/Posts";
import LogoutInfo from "../components/LogoutInfo/LogoutInfo";

const PostPage = () => {
  return (
    <>
      <LogoutInfo/>
      <PostSummary />
      <Posts/>
    </>
  );
};

export default PostPage;
