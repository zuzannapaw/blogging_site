import {
    PostStyled,
    UserIcon,
    ButtonMore,
    ButtonFav,
  } from "../styles/Post.styled";
  import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import PostContext from "../../store/post-context";


const FavPost =(props)=>{

  const postCtx = useContext(PostContext)

const onRemoveFromFav=()=>{

  postCtx.onManagingFav(props.id)


}

    return(
    <PostStyled>
      <ButtonFav onClick={onRemoveFromFav} fav={props.isFav}>Unfavorite</ButtonFav>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <div>
        <UserIcon>
          <FaUser />
        </UserIcon>
        <p>{props.author}</p>
        <ButtonMore>More</ButtonMore>
      </div>
    </PostStyled>
    )

}

export default FavPost