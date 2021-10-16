import React from 'react'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Portfolio(props) {

    
    const activeClass = {
        presentation: 'active-presentation',
        dot: 'active-dot'
      }
    
      const inactiveClass = {
        presentation: 'inactive-presentation',
        dot: 'inactive-dot'
      }

      const [presentationState, setPresentation]= useState({
        one: activeClass,
        two: inactiveClass,
        three: inactiveClass,
      });

      function setOne() {
        setPresentation(state => {
          return {one: activeClass, two: inactiveClass, three: inactiveClass,};
          }
        );
      }

      function setTwo() {
        setPresentation(state => {
          return {one: inactiveClass, two: activeClass, three: inactiveClass,};
          }
        );
      }

      function setThree() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: activeClass,};
            }
          );
      }


    return (
        <div className = {props.page.portfolio.page}>
            <div className = {presentationState.one.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Presentation 1</h1>
                    <p className = "portfolio-text">I’m a junior year undergrer and composer. Welcome to view my portfolio of works.</p>
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
            <div className = {presentationState.two.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Presentation 2</h1>
                    <p className = "portfolio-text">I’m a junior year undergrer and composer. Welcome to view my portfolio of works.</p>
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
            <div className = {presentationState.three.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Presentation 3</h1>
                    <p className = "portfolio-text">I’m a raduate student at Berklee College of Music, and an aspiring audio producer, sound designer and composer. Welcome to view my portfolio of works.</p>
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
            <div className = "content-nav">
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div> */}
                <div className = "nav-dots">
                    <span className={presentationState.one.dot} onClick={setOne}></span> 
                    <span className={presentationState.two.dot} onClick={setTwo}></span> 
                    <span className={presentationState.three.dot} onClick={setThree}></span> 
                </div>
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> */}
            </div>
        </div>
    )
}

export default Portfolio
