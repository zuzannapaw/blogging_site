import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.colors.body};
    color: white;
    font-size: 1.15em;
    margin: 0;
}
h1{
    color:black;
}
p {
    opacity: 0.6;
    line-height: 1.5;
}
img {
    max-width: 100%
}`;

export default GlobalStyles;
