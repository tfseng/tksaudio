import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Navbar(props) {
    return (
        <div className = "Navbar">
            <div>TKS Audio</div>
            <div className = "Socials">
              <div className = "Social-icon"><a href = "mailto:teenkar@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></div>
              <div className = "Social-icon"><a href = "https://linkedin.com/in/teen-kar-seng-a672a356" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a></div>
              {/* <div className = "Social-icon"><a href = "https://www.facebook.com/teenkar.seng" target="blank"><FontAwesomeIcon icon={faFacebook} /></a></div> */}
            </div>
        </div>
    )
}

export default Navbar
