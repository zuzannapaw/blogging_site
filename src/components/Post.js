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
import React from "react";

const Post = (props) => {
  const postCtx = useContext(PostContext);

  //ZNAJDZ TEN OBIEKT

  const onAddToFav = () => {
    postCtx.onManagingFav(props.id);
    console.log("CLICK");
    //dodac state
    // isFav = props.isFav = true;
    //  setIsClick(isFav)
    // const selectedPost = postCtx.posts.find((post) => post.id === props.id);
    // isFav = selectedPost.isFav;
    // console.log(isFav);
  };

  // useEffect(() => {
  //   setIsClick(isFav);
  // }, [isFav]);

  return (
    <PostStyled>
      <ButtonFav
        clicked={postCtx.addedToFav}
        onClick={onAddToFav}
        fav={props.isFav}
      >
        {props.isFav ? "Unfavorite" : "Favourite"}
      </ButtonFav>
      <h2>{props.title}</h2>
      <PostContent>
        <h3>{props.description}</h3>
      </PostContent>
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
