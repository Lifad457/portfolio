import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    &:root {
        --ff-primary: 'Source Sans Pro', sans-serif;
        --ff-secondary: 'Source Code Pro', monospace;
        
        --fw-reg: 300;
        --fw-bold: 900;
        
        --clr-light: #fff;
        --clr-dark: #303030;
        --clr-accent: #16e0bd;
        
        --fs-h1: 3rem;
        --fs-h2: 2.25rem;
        --fs-h3: 1.25rem;
        --fs-body: 1rem;
    }

    body {
        background: var(--clr-light);
        color: var(--clr-dark);
        margin: 0;
        font-family: var(--ff-primary);
        font-size: var(--fs-body);
        line-height: 1.6;
    }
    
    img {
        display: block;
        max-width: 100%;
    }

    h1, h2, h3 {
        line-height: 1.1;
        margin: 0;
    }
    
    h1 { font-size: var(--fs-h1) }
    h2 { font-size: var(--fs-h2) }
    h3 { font-size: var(--fs-h3) }

    @media (min-width: 800px) {
        &:root {
            --fs-h1: 4.5rem;
            --fs-h2: 3.75rem;
            --fs-h3: 1.5rem;
            --fs-body: 1.125rem;
        }
    }
`
export default GlobalStyle