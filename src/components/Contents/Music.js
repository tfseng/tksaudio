import React from 'react'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Music(props) {

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
        four: inactiveClass
      });

      function setOne() {
        setPresentation(state => {
          return {one: activeClass, two: inactiveClass, three: inactiveClass, four: inactiveClass};
          }
        );
      }

      function setTwo() {
        setPresentation(state => {
          return {one: inactiveClass, two: activeClass, three: inactiveClass, four: inactiveClass};
          }
        );
      }

      function setThree() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: activeClass, four: inactiveClass};
            }
          );
      }

      function setFour() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: inactiveClass, four: activeClass};
            }
          );
      }


    return (
        <div className = {props.page.music.page}>
            <div className = {presentationState.one.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">AngryBots Music Implementation</h1>
                    <p className = "portfolio-text">Here is a showcase of a music composition that I wrote, produced and implemented into the Unity Game Demo, AngryBots. The implementation was done through the use of the audio middleware Audiokinetic Wwise into the Unity game engine.
                    The score is written horizontally, with more layers of music added as the game progresses, increasing the level of intensity with each layer. I also created multiple variations for some of the music layers and randomized them using the functions of Wwise to prevent the loops from becoming too tiring to listen to. Short stingers are also created and used as transitions between the different levels of music to make the transitions seamless.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://youtube.com/embed/WZXQZyMpOvE" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.two.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Unity Game Demo Music Implementation</h1>
                  
                    <p className = "portfolio-text">Here is a showcase of music compositions that I wrote, produced and implemented into an Untitled Unity Game Demo. The music was implemented directly into the Unity game engine. For this game, I wrote two contrasting vertical music scores, a ‘Stealth’ score and a ‘Panic’ score, that cross faded into one another as a different scene in the game is triggered. The game starts with the ‘Stealth’ score being looped in the background and transitions into the ‘Panic’ score when the player alerts the guards in the game, completely shifting the mood and intensity to complement the game’s setting. I also designed and implemented the other audio elements in this demo showcase.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://youtube.com/embed/qRnIrgRhqmE" allowFullScreen="allowFullScreen"
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

                </div>
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> */}
            </div>
        </div>
    )
}

export default Music
