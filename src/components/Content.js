import React from 'react'
import Portfolio from './Contents/Portfolio'
import Home from './Contents/Home'
import Testimonials from './Contents/Testimonials'
import Reel from './Contents/Reel'

function Content(props) {

    return (
        <div className = "content-container">
            <Home page = {props.page}/>
            <Testimonials page = {props.page}/>
            <Portfolio page = {props.page}/>
            <Reel page = {props.page} />
          </div>
    )
}

export default Content
