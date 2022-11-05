import {
  PostStyled,
  UserIcon,
  ButtonMore,
  ButtonFav,
  PostContent,
} from "../styles/posts/Post.styled";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import PostContext from "../../store/post-context";


const Post = (props) => {
  const [clickedMore, setIsClickedMore] = useState(false)
  const postCtx = useContext(PostContext);


  const onAddToFav = () => {
    postCtx.onManagingFav(props.id);
  };

  const onClickMore = () => {
    postCtx.onClickMore(props.id);
    setIsClickedMore((prevState) => !prevState);

  }

  const toggleMore = !clickedMore ? "More" : "Hide";

  let author = props.author;
  
  if (postCtx.currAccount) {
    if (props.author === postCtx.currAccount.username) {
      author = "Myself"
    }
  }

  let currPost;
  if(postCtx.currAccount){
  currPost = postCtx.currAccount.favorites.find(post=> post.id === props.id);
}
 
  return (
    <PostStyled>
      {postCtx.currAccount && <ButtonFav
        onClick={onAddToFav}
        fav={currPost}
      >
        {currPost? "Unfavorite" : "Favorite"}
      </ButtonFav>}
      <h2>{props.title}</h2>
      <PostContent clickedMore={clickedMore}>
        <h3>{props.description}</h3>
      </PostContent>
      <div>
        <UserIcon currentAuthor={postCtx.currAccount && postCtx.currAccount.username} postAuthor={props.author}>
          <FaUser />
        </UserIcon>
        <p>{author}</p>
        <ButtonMore onClick={onClickMore} >{toggleMore}</ButtonMore>
      </div>
    </PostStyled>
  );
};

export default Post;

{/* <p>{!clickedMore && "..."}</p> */}