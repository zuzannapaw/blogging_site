import {
  PostStyled,
  UserIcon,
  ButtonMore,
  ButtonFav,
} from "./styles/Post.styled";
import { FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import PostContext from "../store/post-context";
import React from "react";

const Post = (props) => {
  const [click, setIsClick] = useState(false);

  const postCtx = useContext(PostContext);
 

  const onAddToFav = () => {
    postCtx.onAddToFav(props.id);
  };

  return (
    <PostStyled>
      <ButtonFav clicked={postCtx.addedToFav} onClick={onAddToFav}>
        Favourite
      </ButtonFav>
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
  );
};

export default Post;
