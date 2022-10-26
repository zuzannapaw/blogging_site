import styled from "styled-components";
import backgroundImage from "../../../images/summarybgc.jpg";


export const FavSummaryStyled = styled.section`
display: flex;
flex-direction:column;
background-color: #3a3a3a;
background-image: url(${backgroundImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 27rem;
padding:4rem;

h1,p{
  color:#3a3a3a;
  font-family:Arimo, sans-serif;
  margin:0 10%;
  padding:0;
}

h1{
  font-size:2.7rem;
  margin-top:15px;
}

p{
  
  font-size: 1.4rem;
  margin-top:4%;
    
  }

`

export const EmptyFavList = styled.h4`
font-family: Arimo, sans-serif;
`

