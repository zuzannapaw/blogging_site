import styled from "styled-components";

export const PostSummaryStyled = styled.section`
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:center;
  background-color: #3a3a3a;
  width: 100%;
  height: 25rem;
  padding:4rem;

  h1,h2,p{
    color:white;
    font-family:Arimo, sans-serif;
    margin:0;
    padding:0;
  }

  h1{
    font-size:2.5rem;
  }

  button{
    width:17%;
    height:15%;
    border:solid 1.5px #000;
    background-color:white;
    color:#3a3a3a;
    border-radius:20px;
    font-family: Arimo, sans-serif;
    font-weight: 700;
    font-size: 80%;
    cursor:pointer;
    transition:0.3s

  }

  button:hover{
    transform:scale(1.1);
  }
`;

// export const PostSummaryCard = styled.div`
// display:flex;
// flex-direction: column;
// justify-content:center;
//   background-color: white;
//   width:60%;
//   height:15rem;
//   border-radius: 20px;
//   box-shadow: 5px 5px #bebebe;
// `;
