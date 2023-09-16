import { Link } from "react-router-dom"
import { 
    Header,
    Intro, 
    Footer,
    PortfolioItemIndividual } from "../styles/IndexStyle.css"
import logo from "../assets/devjane.png"
import portfolio1 from "../assets/portfolio-01.jpg"
import details from "../assets/portfolio-details.jpg"
import { useState } from "react"

function PortfolioItem() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <Header $menu={menu}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <button className="nav-toggle" 
                    aria-label="toggle navigation" 
                    onClick={() => setMenu(!menu)} 
                >
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to='..' className="nav-link" 
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='../#services' className="nav-link" >
                                My Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='../#about' className="nav-link" >
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='../#work' className="nav-link" >
                                My Work
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>

            <Intro id="home">
                <h1 className="section-title title-intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section-subtitle subtitle-intro">A short subtitle</p>
                <img src={portfolio1} alt="" className="intro-img" />
            </Intro>

            <PortfolioItemIndividual>
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                <img src={details} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </PortfolioItemIndividual>

            <Footer>
                <Link to="mailto:hello@jane.dev" className="footer-link">hello@jane.dev</Link>
                <ul className="social-list">
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://codepen.io">
                            <i className="fab fa-codepen"></i>
                        </Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="http://dribbble.com">
                            <i className="fab fa-dribbble"></i>
                        </Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://github.com">
                            <i className="fab fa-github"></i>
                        </Link>
                    </li>
                </ul>
            </Footer>
        </>
    )
}
export default PortfolioItem