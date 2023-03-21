import React from 'react'
import { useState } from 'react'
import overwatchAssets from '../../assets/tk_overwatch_assets.xlsx'
import juggernautScore from '../../assets/scores/TeenKarSeng_Juggernaut_Score.pdf'
import eyesInTheDuskScore from '../../assets/scores/TeenKarSeng_EyesintheDusk_Score.pdf'
import camelotScore from '../../assets/scores/TeenKarSeng_Camelot_Score.pdf'

function Production(props) {

    
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
        <div className = {props.page.production.page}>
            <div className = {presentationState.one.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Juggernaut</h1>
                    <p className = "portfolio-text">My original composition titled "Juggernaut" scored to a clip from the movie "Final Fantasy VII: Advent Children".</p>
                    <p className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {juggernautScore}>Full Score</a></p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/J6yAPE0q4ao" 
                        allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.two.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Eyes in the Dusk</h1>
                    <p className = "portfolio-text">My original composition titled "Eyes in the Dusk" scored to a clip from the short film "Sintel".</p>
                    <p className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {eyesInTheDuskScore}>Full Score</a></p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/SpDvLGFoYt8" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.three.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Camelot</h1>
                    <p className = "portfolio-text">My original composition titled "Camelot" scored to a short clip from the film "Shrek 2".</p>
                    <p className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {camelotScore}>Full Score</a></p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/8xr5AJ15_bA" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.four.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Second First Kiss</h1>
                    <p style={{width:"35vw"}}className = "portfolio-text">
                        Artist: Eric Chen Yiqin
                        <br></br>
                        Song by: Eric Chen Yiqin
                        <br></br>
                        Produced & Mixed by: Teen Kar Seng</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/FCEh0rFCtHo" allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
            </div> 
            <div className = {presentationState.five.presentation}>
                <div className = "portfolio-text">
                    <h1 className = "portfolio-header">Goodbye</h1>
                    <p style={{width:"35vw"}} className = "portfolio-text">
                    Vocalist: Glenn Seng
                    <br></br>
                    Song by: Teen Kar Seng</p>
                </div>
                <div>
                    <iframe title = "video" className = "portfolio-video"
                        src="https://www.youtube.com/embed/a4iYAnGt4YE" allowFullScreen="allowFullScreen"
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

export default Production
