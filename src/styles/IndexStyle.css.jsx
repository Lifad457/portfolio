import styled from 'styled-components'
import servicesBG from '../assets/services-bg.jpg'

export const Header = styled.header`
    nav {
        display: none;
    }
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

`