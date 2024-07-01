import '../index.css'
import profile from '../assets/profile.png'
import hire_me from '../assets/hire-me.png'

function About () {
    return (
    <div id="about-page">
        <h1 id="about-intro">Hello, I'm Tania, <br/> <strong>A Front-End Developer</strong></h1>
        <img src={profile} alt="profile" id="profile-picture"/>
        <div id="connect-with-me">
            <h3>Kindly Connect With Me 🤝</h3>
            <button className="button-connect" id="linkedin-button">Linkedin</button>
            <button className="button-connect" id="whatsapp-button">Whatsapp</button>
            <button className="button-connect" id="github-button">GitHub</button>
        </div>
        <img src={hire_me} alt="Hire Me Icon" id="hire-me-icon"/>
    </div>
    )
}

export default About