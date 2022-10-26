import styled from "styled-components";
import backgroundImage from "../../../images/summarybgc.jpg"

export const PostSummaryStyled = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 27rem;
  padding:4rem;

  h1,h2,p{
    color :#3a3a3a;
    font-family:Arimo, sans-serif;
    margin: 0 10%;
    padding:0;
  }

  h1{
    font-size:2.7rem;
  }

  h2{
    font-size:2rem;
  }

  p{
    font-size: 1.4rem;
  }

  button{
    width:15%;
    height:12%;
    letter-spacing:1.5px;
    background-color:#3a3a3a;
    color:white;
    margin-left: 10%;
    border-radius:25px;
    font-family: Arimo, sans-serif;
    font-size: 90%;
    cursor:pointer;
    transition:0.3s;
  }

  button:hover{
    background-color: #80deea;
    border: 0px;
  }
`;
