import {
    PostStyled,
    UserIcon,
    ButtonMore,
    ButtonFav,
  } from "../styles/Post.styled";
  import { FaUser } from "react-icons/fa";


const FavPost =(props)=>{
    return(
        <PostStyled>
      <ButtonFav>Favourite</ButtonFav>
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