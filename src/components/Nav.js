import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import { useState } from 'react'

function Nav() {

  const activeClass = {
    page: 'active-page',
    menu: 'active-menu'
  }

  const inactiveClass = {
    page: 'inactive-page',
    menu: 'inactive-menu'
  }

  const [pageState, setPage]= useState({
    home: activeClass,
    reel: inactiveClass,
    portfolio: inactiveClass,
    testimonial: inactiveClass,
    contact: inactiveClass,
    music: inactiveClass
  });

  function setHome() {
      setPage(state => {
        return {home: activeClass, reel: inactiveClass, portfolio: inactiveClass, testimonial: inactiveClass,
          contact: inactiveClass, music: inactiveClass};
          }
        ); 
      }

  function setPortfolio() {
    setPage(state => {
      return {home: inactiveClass, reel: inactiveClass, portfolio: activeClass, testimonial: inactiveClass,
        contact: inactiveClass, music: inactiveClass};
        }
      );
    }

  function setTestimonial() {
  setPage(state => {
    return {home: inactiveClass, reel: inactiveClass, portfolio: inactiveClass, testimonial: activeClass,
      contact: inactiveClass, music: inactiveClass};
      }
    );
  }

  function setContact() {
  setPage(state => {
    return {home: inactiveClass, reel: inactiveClass, portfolio: inactiveClass, testimonial: inactiveClass,
      contact: activeClass, music: inactiveClass};
      }
    );
  }

  function setReel() {
    setPage(state => {
      return {home: inactiveClass, reel: activeClass, portfolio: inactiveClass, testimonial: inactiveClass,
        contact: inactiveClass, music: inactiveClass};
        }
      );
    }

    function setMusic() {
      setPage(state => {
        return {home: inactiveClass, reel: inactiveClass, portfolio: inactiveClass, testimonial: inactiveClass,
          contact: inactiveClass, music: activeClass};
          }
        );
      }

  return (   
      <div className = "nav-container">
        <Navbar page = {pageState}/>
        <Content page = {pageState}/>

        <div className = "Sidenav">
          <ul className = "Sidenav-list">
            <li className = {pageState.home.menu} onClick={setHome}>
              Home
            </li>
            <li className = {pageState.reel.menu} onClick={setReel}>
              Demo Reel
            </li>
            <li className = {pageState.portfolio.menu} onClick={setPortfolio}>
              Portfolio
            </li>
            <li className = {pageState.music.menu} onClick={setMusic}>
              Music Implementation
            </li>
            <li className = {pageState.testimonial.menu} onClick={setTestimonial}>
              Testimonial
            </li>
            <li className = {pageState.contact.menu} onClick={setContact}>
              Contact
            </li>
          </ul>
        </div>
        
      </div>
  );
}

  export default Nav;