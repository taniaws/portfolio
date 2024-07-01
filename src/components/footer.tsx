import '../index.css'
import letstalk from '../assets/lets-talk.png'

function Footer () {
    return (
    <div id="footer-page">
        <h2 className='heading'>Interested Working <strong>With Me?</strong></h2>
        <p style={{maxWidth:"100rem", padding:"0 9rem 5rem 9rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dignissimos magnam, sint quo harum itaque ducimus beatae quos tempore, reprehenderit non soluta. Molestias cupiditate, voluptatum aliquid iure culpa perferendis laudantium.</p>
        <img src={letstalk} alt="Let's Talk Icon" id="lets-talk-icon"/>
        <hr id="footer-line"/>
        <div id="nav-footer">
            <ul id="nav-menu">
                <li>About Me</li>
                <li>Software</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
            </ul>
            <ul id="contact-menu">
                <li>Linkedin</li>
                <li>Whatsapp</li>
                <li>GitHub</li>
            </ul>
        </div>
    </div>
    )
}

export default Footer