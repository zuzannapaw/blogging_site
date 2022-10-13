import styled from "styled-components";

export const FooterStyled = styled.footer`
 position: absolute;
    bottom: 0;
    height:50px;
    width:100%;
    background-color: ${({ theme }) => theme.colors.footer};
    color:white;
    font-family:Arimo, sans-serif;

h2{
    font-size: 1.2rem;
    margin-left:3%;
}

`

export const FooterContainer = styled.div`
    min-height: 100%;
    height: 100%;
    margin: 0 auto -4em;

`