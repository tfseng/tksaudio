import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Reel(props) {

    return (
        <div className = {props.page.reel.page}>
            <div className = "active-presentation">
                <div className = "portfolio-container">
                    <h1 className = "portfolio-header">Demo Reel</h1>
                    <p className = "portfolio-text">I’m a junior year undergraduate student at Berklee College of Music, and an aspiring audio producer, sound designer and composer. Welcome to view my portfolio of works.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
        </div>
    )
}

export default Reel
