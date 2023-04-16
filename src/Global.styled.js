import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --name-font-size: 1.5rem;
        --title-font-size: 1.2rem;
        --text-font-size: 0.95rem;
        --text-font-techno: 0.7rem;
    }

    body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;

/*font-size: calc(15px + 0.390625vw);*/