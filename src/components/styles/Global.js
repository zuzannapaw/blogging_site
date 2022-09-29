import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.colors.body};
    font-size: 1.15em;
    margin: 0;
}
h1{
    color:black;
}
p {
    font-weight: 600;
}
img {
    max-width: 100%
}`;

export default GlobalStyles;
