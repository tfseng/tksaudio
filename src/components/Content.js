import React from 'react'
import Portfolio from './Contents/Portfolio'
import Home from './Contents/Home'
import Testimonials from './Contents/Testimonials'
import Reel from './Contents/Reel'
import Contact from './Contents/Contact'
import Music from './Contents/Music'

function Content(props) {

    return (
        <div className = "content-container">
            <Home page = {props.page}/>
            <Testimonials page = {props.page}/>
            <Portfolio page = {props.page}/>
            <Reel page = {props.page} />
            <Contact page = {props.page} />
            <Music page = {props.page} />
          </div>
    )
}

export default Content
