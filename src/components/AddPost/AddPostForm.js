import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import PostContext from "../../store/post-context";
import { AddPostFormStyled } from "../styles/addPost/AddPostForm.styled";

const AddPostForm = () => {

    const postCtx = useContext(PostContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addTitleHandler = (e) => {
        setTitle(e.target.value);

    };

    const addContentHandler = (e) => {
        setContent(e.target.value);

    };

    const submitFormHandler = (e) => {
        e.preventDefault();
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

    };

    return (
        <AddPostFormStyled onSubmit={submitFormHandler}>
            <label>post title</label>
            <input onChange={addTitleHandler} value={title} className={"post-title"} placeholder="Title"></input>
            <label>what's on your mind?</label>
            <textarea onChange={addContentHandler} value={content} className={"post-content"}></textarea>
            <button type="submit">Add Post</button>
        </AddPostFormStyled>
    )
}

export default AddPostForm