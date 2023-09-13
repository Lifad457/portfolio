import { Link } from "react-router-dom"
import { Header } from "../styles/IndexStyle.css"
import logo from "../assets/devjane.png"

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
                        <li className="nav-item"><Link href="#" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link href="#" className="nav-link">My Services</Link></li>
                        <li className="nav-item"><Link href="#" className="nav-link">About me</Link></li>
                        <li className="nav-item"><Link href="#" className="nav-link">My Work</Link></li>
                    </ul>
                </nav>
            </Header>
        </>
    )
}
export default Index