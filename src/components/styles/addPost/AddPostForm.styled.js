import styled from "styled-components";

export const AddPostFormContainer = styled.div`
min-height:70%;
box-sizing: content-box;
`

export const AddPostFormStyled = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
height: 37rem;
border-radius:10px;
background-color:white;
width:60%;
margin: 65px auto 10px auto;
overflow:hidden;
font-family:Arimo,sans-serif;

input.post-title{
width:60%;
height:7%;
margin: 0 3% 1% 3%;
padding:3px; 
}

textarea.post-content{
box-sizing: content-box;
width:70%;
height:40%; 
margin: 0 3%;
font-size:1em; 
padding:3px; 

}

label{
font-weight: 600;
margin:1.5% 3%;
}

button{
width:20%;
height:5%;
margin: 3% 1% 3% 3%;
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