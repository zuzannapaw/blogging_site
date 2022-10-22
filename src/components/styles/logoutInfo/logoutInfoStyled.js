import styled, {css}  from "styled-components";

export const LogoutInfoDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
background:rgba(179,179,173,0.6);
right:8%;
top: 7%;
height:130px;
width:300px;
font-family: Arimo, sans-serif;
border-radius: 10px;
transition: 1s ease-in;

${props => props.logoutInfoMove&& css`
    right:8%;
    top:5%;

`}

//if btnCancel=> animation

.container{
    margin-left:9px;
    margin-top:3px;
}

h1{
    font-size:17px;
    font-weight:500;
    color:white;
}
p{
    color:white;
    font-weight:500;
    font-size: 13px;
}

.button-container{
    display:flex;
    justify-content: right;
    margin-right:10px;
}

button{
    background:transparent;
    border:0px solid transparent;
    color: white;
    cursor:pointer;
    width:70px;
    transition: ease 0.2s;

    &:hover{
        border-bottom: 1.5px solid white;
    }
}
`


// animation: ${props => props.cancelClicked ? `cancel 3s linear` : `null`};

// @keyframes cancel {
//     from{
//        opacity:1;
   
//     }
//     to{
//        opacity:0;
   

/* // const cancelClick = 
// 0% {opacity:1}
// 30% {opacity:0.6}
// 70% {opacity:0.3}
// 100%{opacity:0}
// ` */

/* .Cancel{
    animation: ${cancelClick} .4s ease-out

} */

// .cancel-active {
//     opacity: 1;
//     transition: opacity 100ms;
//   }
//   .cancel-exit {
//     opacity: 1;
//   }
//   .cancel-exit-active {
//     opacity: 0;
//     // transition: opacity 500ms