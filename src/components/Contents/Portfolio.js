import React from 'react'
import { useState } from 'react'
import overwatchAssets from '../../assets/tk_overwatch_assets.xlsx'
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
        four: inactiveClass,
        five: inactiveClass
      });

      function setOne() {
        setPresentation(state => {
          return {one: activeClass, two: inactiveClass, three: inactiveClass, four: inactiveClass, five: inactiveClass};
          }
        );
      }

      function setTwo() {
        setPresentation(state => {
          return {one: inactiveClass, two: activeClass, three: inactiveClass, four: inactiveClass, five: inactiveClass};
          }
        );
      }

      function setThree() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: activeClass, four: inactiveClass, five: inactiveClass};
            }
          );
      }

      function setFour() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: inactiveClass, four: activeClass, five: inactiveClass};
            }
          );
      }

      function setFive() {
        setPresentation(state => {
            return {one: inactiveClass, two: inactiveClass, three: inactiveClass, four: inactiveClass, five: activeClass};
            }
          );
      }


    return (
        <div className = {props.page.portfolio.page}>
            <div className = {presentationState.one.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Game Audio Demo Reel</h1>
                    <p className = "portfolio-text">Here is my Game Audio Demo Reel that I have created by editing and compiling clips from my other Game Audio Showcases. Enjoy!</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/4nbAuVUnKCc" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.two.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Overwatch Audio Redesign</h1>
                    <p className = "portfolio-text">Here is my approach to the audio design of the multiplayer first-person shooter game, Overwatch, developed and published by Blizzard Entertainment. For this project, I used a screen capture of clips within the game, edited and created my own sounds to synchronize them with the visuals. For this project, I used an extensive amount of Foley, self-recording and MIDI techniques to create the sounds, with only a few ambience sounds that were created through editing and layering sounds taken from my SFX libraries.</p>
                    <p className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {overwatchAssets}>Download Assets List</a></p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/8OxL_zTzyNA" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.three.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">AngryBots Audio Implementation</h1>
                    <p className = "portfolio-text">Here is my approach to the audio design and implementation of the Unity Game Demo, AngryBots. To create the sounds used in this project, I combined the use of self-recorded Foley SFXs and edited Sounds taken from my Sound Libraries to realize my audio vision of the game. I then implemented the sounds through the audio middleware, Audiokinetic Wwise, into Unity Engine.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/sChpSQmyY90" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.four.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">LIMBO Audio Implementation</h1>
                    <p className = "portfolio-text">Here is my approach to the audio design and implementation of the puzzle-platform video game, LIMBO, developed by independent studio Playdead. To create the sounds used in this project, I layered sounds taken from my SFX libraries to create the eerie ambiences and used several Foley techniques and self-recorded sounds to create the gore and spider SFXs. I then implemented the sounds through the audio middleware, Audiokinetic Wwise.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/6J2KyhNgCWk" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.five.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">The Last of Us Audio Redesign</h1>
                    <p className = "portfolio-text">Here is my approach to the audio design of the action-adventure game, The Last of Us, developed by Naughty Dog and published by Sony Computer Entertainment.
                    For this project, I used a screen capture of a clip within the game and created my own sounds to synchronize them with the visuals. The majority of sounds used in this project were created through the use of Foley and self-recording techniques, the only exception being the outdoor ambience which was edited by layering a few sounds taken from my SFX libraries.</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/ZfbS6l4vGrQ" allowFullScreen="allowFullScreen"
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
                    <span className={presentationState.four.dot} onClick={setFour}></span> 
                    <span className={presentationState.five.dot} onClick={setFive}></span> 
                </div>
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> */}
            </div>
        </div>
    )
}

export default Portfolio
