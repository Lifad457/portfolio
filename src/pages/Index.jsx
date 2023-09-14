import { Link } from "react-router-dom"
import { 
    Header,
    MyServices,
    Intro, 
    AboutMe,
    MyWork,
    Footer } from "../styles/IndexStyle.css"
import logo from "../assets/devjane.png"
import jane_01 from "../assets/dev-jane-01.jpg"
import jane_02 from "../assets/dev-jane-02.jpg"
import portfolio1 from "../assets/portfolio-01.jpg"
import portfolio2 from "../assets/portfolio-02.jpg"
import portfolio3 from "../assets/portfolio-03.jpg"
import portfolio4 from "../assets/portfolio-04.jpg"
import portfolio5 from "../assets/portfolio-05.jpg"
import portfolio6 from "../assets/portfolio-06.jpg"
import portfolio7 from "../assets/portfolio-07.jpg"
import portfolio8 from "../assets/portfolio-08.jpg"
import portfolio9 from "../assets/portfolio-09.jpg"
import portfolio10 from "../assets/portfolio-10.jpg"

function Index() {
    return (
        <>
            <Header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={{pathname: '.', hash: '#home'}} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{pathname: '.', hash: '#services'}} className="nav-link">My Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{pathname: '.', hash: '#about'}} className="nav-link">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{pathname: '.', hash: '#work'}} className="nav-link">My Work</Link>
                        </li>
                    </ul>
                </nav>
            </Header>

            <Intro id="home">
                <h1 className="section-title title-intro">
                    Hi, I am <strong>Jane Smith</strong>
                </h1>
                <p className="section-subtitle subtitle-intro">front-end dev</p>
                <img src={jane_01} alt="a picture of Jane Smith smiling" />
            </Intro>

            <MyServices id="services">
                <h2 className="section-title title-services">What I do</h2>
                <div className="services">
                    <div className="service">
                    <h3>Design + Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> 
                    
                    <div className="service">
                    <h3>E-Commerce</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> 
                    
                    <div className="service">
                    <h3>WordPress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> 
                </div> 
                
                <Link to={{pathname: '.', hash: '#work'}} className="btn">My Work</Link>
            </MyServices>
        
            <AboutMe className="about-me" id="about">
                <h2 className="section-title title-about">Who I am</h2>
                <p className="section-subtitle subtitle-about"></p>

                <div className="about-me-body">
                    <p></p>
                    <p></p>
                </div>
                
                <img src={jane_02} alt="Jane leaning against a bus" />
            </AboutMe>
        
            <MyWork id="work">
                <h2 className="section-title">My work</h2>
                <p className="section-subtitle"></p>
                
                <div className="portfolio">
                    <a href="#" className="portfolio-item">
                        <img src={portfolio1} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio2} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio3} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio4} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio5} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio6} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio7} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio8} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio9} alt="" className="portfolio-img" />
                    </a>
                    <a href="#" className="portfolio-item">
                        <img src={portfolio10} alt="" className="portfolio-img" />
                    </a>
                </div>
            </MyWork>

            <Footer>
                <Link to="mailto:hello@jane.dev" class="footer__link">hello@jane.dev</Link>
                <ul className="social-list">
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://codepen.io">a</Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="http://dribbble.com">b</Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://twitter.com">c</Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://github.com">d</Link>
                    </li>
                </ul>
            </Footer>
        </>
    )
}
export default Index