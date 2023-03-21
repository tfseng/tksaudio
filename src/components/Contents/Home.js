import React from 'react'
import Resume from '../../assets/TeenKarSeng_CV_Mar23.pdf'

function Home(props) {
    return (
        <div className = {props.page.home.page}>
            <div className = "home-container">
                <div>
                    <h1 className = "home-header">Hello, I'm Teen Kar!</h1>
                    <p className = "home-text">I’m a recent graduate from Berklee College of Music, an aspiring audio producer, sound designer and composer. Welcome to my portfolio website!</p>
                    <div className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {Resume}>Download Resume</a></div> 
                </div>
            </div>
         </div>
    )
}

export default Home
