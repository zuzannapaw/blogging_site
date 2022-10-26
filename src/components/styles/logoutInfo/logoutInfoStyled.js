import styled, {css,keyframes}  from "styled-components";

const logoutMove = keyframes`
    0%  {position:absolute; top:7%; }
    50% {position:absolute; top:6%; }
    100% {position:absolute; top:7%;}
`

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

${props => props.logoutInfoMove&& css`
   animation: ${logoutMove} 1s linear;

`}


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
        border-bottom: 1px solid white;
    }
}

`
