import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
        background-color: #0F1624;
        color: #FFF;
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1, h2, ul, li, p {
        margin: 0;
        padding: 0;
    }
`