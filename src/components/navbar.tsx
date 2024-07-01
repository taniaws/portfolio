import '../index.css'
import logo from '../assets/logo.png'

function Navbar () {
    return (
    <>
        <div id="nav">
            <img src={logo} alt="logo" id="navbar-logo" />
            <ul id="nav-menu">
                <li>About Me</li>
                <li>Software</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <hr id="nav-line"/>
    </>
    )
}

export default Navbar