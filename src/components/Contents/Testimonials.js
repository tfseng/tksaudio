import React from 'react'
import { useState } from 'react'
import Testimonial from '../../assets/tk_testimonial_one.pdf'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Testimonials(props) {

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
      });

      function setOne() {
        setPresentation(state => {
          return {one: activeClass, two: inactiveClass,};
          }
        );
      }

      function setTwo() {
        setPresentation(state => {
          return {one: inactiveClass, two: activeClass};
          }
        );
      }


    return (
        <div className = {props.page.testimonial.page}>
            <div className = {presentationState.one.presentation}>
                <div>
                    {/* <h1 className = "testimonial-header">Testimonial 1</h1> */}
                    <p className = "testimonial-text"><i>"Teen Kar Seng was a student of mine in the Berklee Online course “Game Audio Production with Wwise” during the Summer 2021 term. TK (as he asked us to call him) was not only outstanding in terms of meeting all the goals and deadlines of the class, but he also approached his work in an unusually creative way. His sound design and music composition skills are already at a very high level and I suspect those skills will only develop more. He was well liked by his class peers and was always available to help others in the group when needed. I recommend him highly and without reservation."</i></p> 
                    <p className = "testimonial-testifier">- George Oldziey, Associate Professor of Film Scoring, Berklee College of Music</p>
                    <p className = "home-resume"><a style={{ textDecoration: "underline" }}target = "blank"href = {Testimonial}>Download Testimonial</a></p>  
                </div>
            </div>

            {/* <div className = {presentationState.two.presentation}>
                <div>
                    <h1 className = "testimonial-header">Testimonial 2</h1>
                    <p className = "testimonial-text"><i>"Dolor sit amet consectetur adipisicing elit. Eos cum dignissimos molestiae repellendus id explicabo consequatur. In ea eum doloremque quam nemo, sint aliquid. Eaque, et! Voluptatum architecto hic fugit!"</i></p> 
                    <p className = "testimonial-testifier">- Testimonial Number Two, Professor, Berklee College of Music</p> 
                </div>
            </div> */}
            
            <div className = "content-nav">
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div> */}
                <div className = "nav-dots">
                    {/* <span className={presentationState.one.dot} onClick={setOne}></span>  */}
                    {/* <span className={presentationState.two.dot} onClick={setTwo}></span>  */}
                </div>
                {/* <div className = "nav-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> */}
            </div>
        </div>
    )
}

export default Testimonials
