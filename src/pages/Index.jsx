import { Link, useLocation } from "react-router-dom"
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
import { useState, useEffect } from "react"

function Index() {
    const [menu, setMenu] = useState(false);

    const { pathname, hash, key } = useLocation();
    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView();
                    }
                } 
            , 0);
        }
    }, [pathname, hash, key]); // do this on route change

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
                            <Link to='#home'
                            className="nav-link" 
                            onClick={() => setMenu(false)} >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#services' 
                            className="nav-link" 
                            onClick={() => setMenu(false)} >
                                My Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#about'
                            className="nav-link" 
                            onClick={() => setMenu(false)} >
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='#work'
                            className="nav-link" 
                            onClick={() => setMenu(false)} >
                                My Work
                            </Link>
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
                
                <Link to='#work' reloadDocument 
                    className="btn">My Work
                </Link>         
            </MyServices>
        
            <AboutMe className="about-me" id="about">
                <h2 className="section-title title-about">Who I am</h2>
                <p className="section-subtitle subtitle-about">Designer & developer based out of NYC</p>

                <div className="about-me-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <img src={jane_02} alt="Jane leaning against a bus" />
            </AboutMe>
        
            <MyWork id="work">
                <h2 className="section-title title-work">My work</h2>
                <p className="section-subtitle subtitle-work">A selection of my range of work</p>
                
                <div className="portfolio">
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio1} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio2} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio3} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio4} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio5} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio6} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio7} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio8} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio9} alt="" className="portfolio-img" />
                    </Link>
                    <Link to="my-work" className="portfolio-item">
                        <img src={portfolio10} alt="" className="portfolio-img" />
                    </Link>
                </div>
            </MyWork>

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
export default Index