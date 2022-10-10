import styled, { css } from "styled-components";

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
    margin-bottom: 0;
  }

  h3 {
    font-size: 0.9rem;
    line-height: 170%;
    font-weight: 500;
  }

  div {
    margin-top:2%;
    display: flex;
    
  }

  p {
    font-size: 0.8rem;
    align-self: flex-end;
    margin: 0 0 0 1%;
    flex: 7;
  }
`;

export const PostContent = styled.div`
  width: 1000px;
  height: 2.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

${props => props.clickedMore && css`
height: auto;
overflow: initial;
`}

p{
  font-size: 16px;
  padding-bottom: 4px;
  margin:0;
  letter-spacing:4px;
}

`


export const UserIcon = styled.div`
  width: 1.5%;

  ${props=> props.currentAuthor === props.postAuthor && css`
  color:#80deea;
  `}
  
`;

export const ButtonMore = styled.button`
  flex: 1;
  border: 1.4px solid #3a3a3a;
  background-color: white;
  color: #3a3a3a;
  padding: 0.5%;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  align-self: flex-end;

  &:hover{
    background-color: #3a3a3a;
    color:white;
  }
`;

export const ButtonFav = styled.button`
  width: 15%;
  height: 10%;
  border: 1.5px solid #d32f2f;
  color: #d32f2f;
  background-color: white;
  border-radius: 20px;
  font-family: Arimo, sans-serif;
  cursor: pointer;
  margin-bottom: 2%;

  &:hover {
    background-color: #d32f2f;
    color: white;
  }

  ${props => props.fav && css`
  background-color: #d32f2f;
    color:white;
  `}

`;

// ${props => props.clicked &&`
// background-color: #d32f2f;
//     color:white;
// `}
