import React from 'react'
import Resume from '../../assets/tk_resume.pdf'

function Home(props) {
    return (
        <div className = {props.page.home.page}>
            <div className = "home-container">
                <div>
                    <h1 className = "home-header">Hello, I'm Teen Kar!</h1>
                    <p className = "home-text">I’m a junior year undergraduate student at Berklee College of Music (Berklee Online), and an aspiring audio producer, sound designer and composer. Welcome to my Sound Design portfolio website.</p>
                    <div className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {Resume}>Download Resume</a></div> 
                </div>
            </div>
         </div>
    )
}

export default Home
