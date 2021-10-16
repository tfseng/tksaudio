import React from 'react'
import { useState } from 'react'
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
                    <h1 className = "testimonial-header">Testimonial 1</h1>
                    <p className = "testimonial-text"><i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum dignissimos molestiae repellendus id explicabo consequatur. In ea eum doloremque quam nemo, sint aliquid. Eaque, et! Voluptatum architecto hic fugit!"</i></p> 
                    <p className = "testimonial-testifier">- Testimonial Number One, Professor, Berklee College of Music</p> 
                </div>
            </div>

            <div className = {presentationState.two.presentation}>
                <div>
                    <h1 className = "testimonial-header">Testimonial 2</h1>
                    <p className = "testimonial-text"><i>"Dolor sit amet consectetur adipisicing elit. Eos cum dignissimos molestiae repellendus id explicabo consequatur. In ea eum doloremque quam nemo, sint aliquid. Eaque, et! Voluptatum architecto hic fugit!"</i></p> 
                    <p className = "testimonial-testifier">- Testimonial Number Two, Professor, Berklee College of Music</p> 
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

export default Testimonials
