import {
  PostStyled,
  UserIcon,
  ButtonMore,
  ButtonFav,
  PostContent,
} from "./styles/Post.styled";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import PostContext from "../store/post-context";


const Post = (props) => {
  const [clickedMore,setIsClickedMore] = useState(false)
  const postCtx = useContext(PostContext);


  const onAddToFav = () => {
    postCtx.onManagingFav(props.id);
  };

  const onClickMore = () => {
    postCtx.onClickMore(props.id)
    setIsClickedMore((prevState)=> !prevState)

  }

  const toggleMore = !clickedMore ? "More" : "Hide";


  return (
    <PostStyled>
      <ButtonFav
        onClick={onAddToFav}
        fav={props.isFav}
      >
        {props.isFav ? "Unfavorite" : "Favorite"}
      </ButtonFav>
      <h2>{props.title}</h2>
      <PostContent clickedMore={clickedMore}>
        <h3>{props.description}</h3><p>{!postCtx.clickedMore && "..." }</p>
         </PostContent>
      <div>
        <UserIcon>
          <FaUser />
        </UserIcon>
        <p>{props.author}</p>
        <ButtonMore onClick={onClickMore} >{toggleMore}</ButtonMore>
      </div>
    </PostStyled>
  );
};

export default Post;
