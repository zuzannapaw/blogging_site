import styled from "styled-components";

export const FooterStyled = styled.footer`
    position: absolute;
    bottom: 0;
    height:60px;
    width:100%;
    background-color: ${({ theme }) => theme.colors.footer};
    color:white;
    font-family:Arimo, sans-serif;

h2{
    position:absolute;
    top:12px;
    left:20px;
    font-size: 0.8rem;
    margin-left:3%;
}

`

export const FooterContainer = styled.div`
    min-height: 100%;
    height: 100%;
    margin: 0 auto -4em;

`

export const IconsContainer = styled.div`
    font-size:1rem;
    display:flex;
    width:13%;
    justify-content: space-around;
    position:absolute;
    top:35%;
    right: 5%;

    .icon{
        cursor:pointer;
    }
`