import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import PostContext from "../../store/post-context";
import { AddPostFormStyled } from "../styles/addPost/AddPostForm.styled";

const AddPostForm = () => {

    const postCtx = useContext(PostContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [formValidInfo, setFormValidInfo] = useState("");

    const addTitleHandler = (e) => {
        setTitle(e.target.value);

    };

    const addContentHandler = (e) => {
        setContent(e.target.value);

    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        if(title.length > 0 && content.length > 0){
        const newPostData = {
            title: title,
            description: content,
            author: postCtx.currAccount.username,
            isFav: false,
            id: Math.floor(Math.random() * (100-5) + 5),
        };

        postCtx.onAddPost(newPostData)
        setTitle("");
        setContent("");
        navigate("/");

    } else {
        setFormValidInfo("Do not send empty post. Add title and content.")

    }

    };
    return (
        <AddPostFormStyled onSubmit={submitFormHandler}>
            <p className="form-valid-info">{formValidInfo}</p>
            <label>post title</label>
            <input onChange={addTitleHandler} value={title} className={"post-title"} placeholder="Title" maxlength="125"></input>
            <label>what's on your mind?</label>
            <textarea onChange={addContentHandler} value={content} className={"post-content"}></textarea>
            <button type="submit">Add Post</button>
        </AddPostFormStyled>
    )
}

export default AddPostForm