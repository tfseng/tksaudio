import React from 'react'
import Resume from '../../assets/TeenKarSeng_CV_Mar23.pdf'

function Contact(props) {
    return (
        <div className = {props.page.contact.page}>
           <div className = "home-container">
                <div>
                    <h1 className = "home-header">Contact Me</h1>
                    <p className = "contact-text">Email: teenkar@gmail.com<br></br>Website: tksaudio.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
