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

        --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
            0.125em 0.125em 0.25em rgba(0,0,0,.15);
    }

    html {
        scroll-behavior: smooth;
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

    strong { font-weight: var(--fw-bold) }

    /* &:focus {
        outline: 3px solid var(--clr-accent);
        outline-offset: 3px;
    } */

    .btn {
        display: inline-block;
        padding: .5em 2.5em;
        background: var(--clr-accent);
        color: var(--clr-dark);
        text-decoration: none;
        cursor: pointer;
        font-size: .8rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: var(--fw-bold);
        transition: transform 200ms ease-in-out;
    }

    .btn:hover {
        transform: scale(1.1);
    }

    h1, h2, h3 {
        line-height: 1;
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

    section {
        padding: 5em 2em;
    }

    .section-title {
        margin-bottom: .25em;
    }

    .section-subtitle {
        margin: 0;
        font-size: var(--fs-h3);
    }
`
export default GlobalStyle