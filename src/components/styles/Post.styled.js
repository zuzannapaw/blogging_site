import styled from "styled-components";


export const PostStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #3a3a3a;
  border-bottom: solid 1px #3a3a3a;
  font-family: Arimo, sans-serif;
  padding: 0 2% 2% 0;
  line-height: 90%;
  margin-bottom: 5%;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  p {
    font-size: 0.8rem;
   align-self: flex-end;
    margin: 0 0 0 1%;
    flex: 7;
  }
`;

export const UserIcon = styled.div`
width:1.5%;
align-self: flex-end;
`

export const ButtonMore = styled.button`
flex: 1;
border: 1.4px solid #3a3a3a;
background-color: white;
color: #3a3a3a;
padding: 0.5%;
font-weight: bold;
border-radius: 15px;
cursor: pointer;
`

export const ButtonFav = styled.button`
width:15%;
height:10%;
border: 1.5px solid #d32f2f;
color: #d32f2f;
background-color:white;
border-radius:20px;
font-family: Arimo, sans-serif;
cursor:pointer;
margin-bottom: 2%;

&:hover{
    background-color: #d32f2f;
    color:white;
}

${props => props.clicked &&`
background-color: #d32f2f;
    color:white;
`}


`
