import React from 'react'
import Resume from '../../assets/resume.pdf'

function Contact(props) {
    return (
        <div className = {props.page.contact.page}>
           <div className = "home-container">
                <div>
                    <h1 className = "home-header">Contact Me</h1>
                    <p className = "contact-text">Email: teenkar@gmail.com<br></br>LinkedIn: linkedin.com/in/teen-kar-seng-a672a356/<br></br>Website: tksaudio.com</p>
                    <div className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {Resume}>Download Resume</a></div> 
                </div>
            </div>
        </div>
    )
}

export default Contact
