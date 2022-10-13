import AddPostForm from "./AddPostForm"
import { AddPostFormContainer } from "../styles/addPost/AddPostForm.styled";

const AddPost = () =>{
    return(
        <AddPostFormContainer>
        <AddPostForm/>
        </AddPostFormContainer>
    );
};

export default AddPost;