import React from 'react'

function Home(props) {
    return (
        <div className = {props.page.home.page}>
            <div className = "home-container">
                <div>
                    <h1 className = "home-header">Hello, I'm Teen Kar!</h1>
                    <p className = "home-text">I’m a junior year undergraduate student at Berklee College of Music, and an aspiring audio producer, sound designer and composer. Welcome to view my portfolio of works.</p>
                    <div className = "home-resume"><a href = "https://www.google.com">Download Resume</a></div> 
                </div>
            </div>
         </div>
    )
}

export default Home
