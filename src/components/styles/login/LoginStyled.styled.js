import styled from "styled-components";


export const LoginContainer = styled.div`
display:flex;
height:100%;
`

export const LoginCardStyled = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
min-height:37.7rem;
border-radius:50px;
background-color:white;
width:25%;
margin: 3% auto;

`


export const LoginFormStyled = styled.form`
display:flex;
flex-direction:column;
justify-content:inherit;
align-items:center;
margin:0 auto;
height:1em;
width:10em;
font-family:Arimo,sans-serif;


label{
    font-size: 1em;
    font-weight:600;
    margin-bottom:13% 0;
    padding:5%;
}

input{
    width:290px;
    line-height: 27px;
    margin:10%;   
}

input.email{
    ${(props)=>props.emailError && `
    background-color: #ef9a9a;
    border: 1px solid red;
    &:focus{
        outline: none;
    }
    
    `}
}

input.password{
    ${(props)=>props.passwordError && `
    background-color: #ef9a9a;
    border: 1px solid red;
    &:focus{
        outline: none;
    }
    `}
}


button{
    margin:40% 0;
    width:250px;
    line-height: 40px;
    border-radius:20px;
    border:none;
    background-color: white;
    color:#3a3a3a;
    border: 1px solid #3a3a3a;
    font-size:17px;
    letter-spacing:1px;
    cursor:pointer;
    transition:.3s;
    font-weight: 600;

    &:hover{
        background-color:#3a3a3a;
        color: white;
    }
}

p{
    color:#DC143C;
    font-size: 13px;
    font-weight:500;
    margin:2%;
}

`

//fix footer and height

// & .email{
//     ${(props) =>
//     props.color && `background-color: red;
//         border: 1px solid black
//     `}
// }

// & .password{
//     ${(props) =>
//     props.color && `background-color: red;
//         border: 1px solid black
//     `}