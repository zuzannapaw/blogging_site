import {
  PostStyled,
  UserIcon,
  ButtonMore,
  ButtonFav,
} from "../styles/posts/Post.styled";
import { FaUser } from "react-icons/fa";
import { useContext,useState } from "react";
import PostContext from "../../store/post-context";

const FavPost = (props) => {
  const [clickedMore, setIsClickedMore] = useState(false)

  const postCtx = useContext(PostContext)

  const onClickMore = () => {
    postCtx.onClickMore(props.id);
    setIsClickedMore((prevState) => !prevState);

  }

  const toggleMore = !clickedMore ? "More" : "Hide";

  const onRemoveFromFav = () => {
    postCtx.onManagingFav(props.id)
  }

  return (
    <PostStyled >
      <ButtonFav onClick={onRemoveFromFav} fav={props.isFav}>Unfavorite</ButtonFav>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <div>
        <UserIcon>
          <FaUser />
        </UserIcon>
        <p>{props.author}</p>
        <ButtonMore onClick={onClickMore}>{toggleMore}</ButtonMore>
      </div>
    </PostStyled>
  )

}

export default FavPost