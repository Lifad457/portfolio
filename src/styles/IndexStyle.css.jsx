import styled, {css} from 'styled-components'
import servicesBG from '../assets/services-bg.jpg'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    
    .logo {
        max-width: 100px;
    }

    .nav {
        position: fixed;
        background: var(--clr-dark);
        color: var(--clr-light);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;

        transform: translateX(100%);
        transition: transform 250ms cubic-bezier(.5, 0, .5, 1);
    }

    .nav-list {
        list-style: none;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-link {
        color: inherit;
        font-weight: var(--fw-bold);
        font-size: var(--fs-h2);
        text-decoration: none;
    }

    .nav-link:hover {
        color: var(--clr-accent);
    }

    .nav-toggle {
        padding: .5em;
        background: transparent;
        border: 0;
        cursor: pointer;
        position: absolute;
        right: 1em;
        top: 1em;
        z-index: 1000;
    }

    .hamburger {
        display: block;
        position: relative;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
        background: var(--clr-accent);
        width: 2em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
    }

    .hamburger::before,
    .hamburger::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
    }

    .hamburger::before { top: 6px; }
    .hamburger::after { bottom: 6px; }


    ${props => props.$menu && css`
        .nav-toggle {
            position: fixed;
        }

        .nav {
            transform: translateX(0);
        }

        .hamburger {
            transform: rotate(.625turn);
        }

        .hamburger::before {
            transform: rotate(90deg) translateX(-6px);
        }

        .hamburger::after {
            opacity: 0;
        }
    `};
`
export const Intro = styled.section`
    position: relative;

    .title-intro {
        font-weight: var(--fw-reg);
    }

    .title-intro strong {
        display: block;
    }

    .subtitle-intro {
        display: inline-block;
        background: var(--clr-accent);
        font-family: var(--ff-secondary);
        margin-bottom: 1em;
        padding: .25em 1em;
    }

    img {
        box-shadow: var(--bs);
    }

    @media (min-width: 600px) {
        display: grid;
        width: min-content;
        margin: 0 auto;
        grid-column-gap: 1em;
        grid-template-areas: 
            "img title"
            "img subtitle";
        grid-template-columns: min-content max-content;
        
        img {
            grid-area: img;
            min-width: 250px;
            position: relative;
            z-index: 2;
        }    

        .subtitle-intro {
            align-self: start;
            grid-column: -1 / 1;
            grid-row: 2;
            text-align: right;
            position: relative;
            left: -1.5em;
            width: calc(100% + 1.5em);
        }
    }
`
export const MyServices = styled.section`
    background-color: var(--clr-dark);
    background-image: url(${servicesBG});
    background-size: cover;
    color: var(--clr-light);
    text-align: center;

    .title-services {
        color: var(--clr-accent);
        position: relative;
    }

    .title-services::after {
        content: '';
        display: block;
        width: 2em;
        height: 1px;
        margin: 0.5em auto 1em;
        background: var(--clr-light);
        opacity: 0.25;
    }

    .services {
        margin-bottom: 4em;
    }

    .service {
        max-width: 500px;
        margin: 0 auto;
    }

    @media (min-width: 800px) {
        .services {
            display: flex;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .service + .service {
            margin-left: 2em;
        }
    }
`
export const AboutMe = styled.section`
    max-width: 1000px;
    margin: 0 auto;

    .subtitle-about {
        background: var(--clr-accent);
        font-family: var(--ff-secondary);
        margin-bottom: 1em;
        padding: .25em 1em;
    }

    img {
        box-shadow: var(--bs);
    }

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-areas: 
            "title img"
            "subtitle img"
            "text img";
        grid-column-gap: 2em;
    
        .title-about {
            grid-area: title;
        }
        
        .subtitle-about {
            grid-column: 1 / -1;
            grid-row: 2;
            position: relative;
            left: -1em;
            width: calc(100% + 2em);
            padding-left: 1em;
            padding-right: calc(200px + 4em);
        }
        
        img {
            grid-area: img;
            position: relative;
            z-index: 2;
        }
    }


`
export const MyWork = styled.section`
    background-color: var(--clr-dark);
    color: var(--clr-light);
    text-align: center;    

    .subtitle-work {
        color: var(--clr-accent);
        font-weight: var(--fw-bold);
        margin-bottom: 2em;
    }

    .portfolio {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .portfolio-item {
        background: var(--clr-accent);
        overflow: hidden;
    }

    .portfolio-img {
        transition: 
            transform 750ms cubic-bezier(.5, 0, .5, 1),
            opacity 250ms linear;
    }

    .portfolio-item:focus {
        position: relative;
        z-index: 2;
    }

    .portfolio-img:hover,
    .portfolio-item:focus .portfolio-img {
        transform: scale(1.2);
        opacity: .5;
    }
`
export const Footer = styled.footer`
    background: #111;
    color: var(--clr-accent);
    text-align: center;
    padding: 2.5em 0;
    font-size: var(--fs-h3);

    a { 
        color: inherit;
        text-decoration: none;
    }

    .footer-link {
        font-weight: var(--fw-bold);
    }

    .footer-link:hover,
    .social-list-link:hover {
        opacity: .7;
    }

    .footer-link:hover {
        text-decoration: underline;
    }

    .social-list {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 2em 0 0;
        padding: 0;
    }

    .social-list-item {
        margin: 0 .5em;
    }

    .social-list-link {
        padding: .5em;
    }
`
export const PortfolioItemIndividual = styled.div`
    padding: 0 2em 2em;
    max-width: 1000px;
    margin: 0 auto;

    p {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
`