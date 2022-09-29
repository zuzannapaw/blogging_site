import { PostStyled, UserIcon } from "./styles/Post.styled";
import { FaUser } from "react-icons/fa";


const Post = (props) => {
  return (
    <PostStyled>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <div>
        <UserIcon>
            <FaUser/>
        </UserIcon>
        <p>{props.author}</p>
        <button>More</button>
      </div>
    </PostStyled>
  );
};

export default Post;
