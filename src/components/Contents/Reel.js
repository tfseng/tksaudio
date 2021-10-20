import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Reel(props) {

    return (
        <div className = {props.page.reel.page}>
            <div className = "active-presentation">
                <div className = "portfolio-container">
                    <h1 className = "portfolio-header">Game Audio Demo Reel</h1>
                    <p className = "portfolio-text">Here is my Game Audio Demo Reel that I have created by editing and compiling clips from my other Game Audio Showcases. Enjoy!</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/y55-WfPsjTw" allowFullScreen="allowFullScreen"
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
