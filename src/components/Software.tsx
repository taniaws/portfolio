import '../index.css'
import javascript from '../assets/js.png'
import typescript from '../assets/ts.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/git.png'

function Software () {
    return (
    <div id="software-page">
        <h2 className='heading'>My Hard Skills</h2>
        <div id="all-software-div">
            <div className='software-div'>
                <img src={javascript} alt="JavaScript" className='software-icon'/>
                <h5 className='software-icon-name'>JavaScript</h5>
            </div>
            <div className='software-div'>
                <img src={typescript} alt="TypeScript" className='software-icon'/>
                <h5 className='software-icon-name'>TypeScript</h5>
            </div>
            <div className='software-div'>
                <img src={react} alt="React" className='software-icon'/>
                <h5 className='software-icon-name'>React</h5>
            </div>
            <div className='software-div'>
                <img src={html} alt="HTML" className='software-icon'/>
                <h5 className='software-icon-name'>HTML</h5>
            </div>
            <div className='software-div'>
                <img src={css} alt="CSS" className='software-icon'/>
                <h5 className='software-icon-name'>CSS</h5>
            </div>
            <div className='software-div'>
                <img src={git} alt="Git" className='software-icon'/>
                <h5 className='software-icon-name'>Git</h5>
            </div>
        </div>
    </div>
    )
}

export default Software