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

  button {
    flex: 1;
    border: 1.4px solid #3a3a3a;
    background-color: white;
    color: #3a3a3a;
    padding: 0.5%;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #3a3a3a;
    color: white;
  }
`;

export const UserIcon = styled.div`
width:1.5%;
align-self: flex-end;




`
