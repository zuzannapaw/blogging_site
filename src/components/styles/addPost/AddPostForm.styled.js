import styled from "styled-components";

export const AddPostFormStyled = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;;
    height: 40rem;
    border-radius:40px;
    background-color:white;
    width:60%;
    margin: 3% auto;
    overflow:hidden;
    font-family:Arimo,sans-serif;

input.post-title{
    width:60%;
    height:7%;
    margin: 0 1%;
    padding:3px;
    margin-bottom:3%;
    
}

textarea.post-content{
    box-sizing: content-box;
    width:70%;
    height:40%; 
    margin: 0 1%;
    font-size:1em; 
    padding:3px; 

}

label{
    font-weight: 600;
    margin:1.5% 1%;
}

button{
    width:20%;
    height:5%;
    margin: 2.5% 1% 3%;
    cursor:pointer;
    background-color: white;
    color: #3a3a3a;
    border: 1.5px solid #3a3a3a;
    border-radius:13px;
    font-size:15px;
    letter-spacing: 1.3px;
    transition:0.3s;

    &:hover{
        background-color: #3a3a3a;
        color: white;
        
    }
}
`