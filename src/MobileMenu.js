import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MobileMenu extends Component {

  componentDidMount = () => {
    var navBtns = document.getElementById( 'navMenuMobile' ).getElementsByTagName( 'a' );
    var path = window.location.href;
    for ( let i = 0; i < navBtns.length; i++ ) {
      if ( navBtns[i].href !== path ){
        navBtns[i].className += ' inactive'
      }
    }
  };

  render(){
    return(
      <div id="navMenuMobile" class="hidden">
        <div id="closeIconHolder">
          <i id="closeIcon" class="fas fa-times" onclick="menu()"></i>
        </div>
        <div class="wrapper">
          <ul>
            <li class="navBtn">
              <NavLink exact to='/'>
                <h2>Home</h2>
              </NavLink>
            </li>
            <li class="navBtn">
              <NavLink exact to='/projects'>
                <h2>Projects</h2>
              </NavLink>
            </li>
            <li class="navBtn">
              <NavLink exact to='/about'>
                <h2>About</h2>
              </NavLink>
            </li>
            <li class="navBtn">
              <NavLink exact to='/contacts'>
                <h2>Contacts</h2>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
