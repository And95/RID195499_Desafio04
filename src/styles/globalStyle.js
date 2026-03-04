import { createGlobalStyle } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const GlobalStyle = createGlobalStyle`
    body, html {
        background-color: #0F1624;
        color: #FFF;
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1, h2, ul, li, p, a {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    li a {
        text-decoration: none;
        color: inherit;
    }

    .flex {
        display: flex;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .sp-between {
        justify-content: space-between;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }
`