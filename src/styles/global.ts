import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Roboto';
        line-height: 1.5;
    }
    *:focus-visible {
        outline: 1px auto red;
    }
`;
