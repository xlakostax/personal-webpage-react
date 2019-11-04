import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  componentDidMount = () => {
    var navBtns = document.getElementById( 'headerNavMenu' ).getElementsByTagName( 'a' );
    var path = window.location.href;
    for ( let i = 0; i < navBtns.length; i++ ) {
      if ( navBtns[i].href !== path ){
        navBtns[i].className += ' inactive'
      }
    }
  };

  render() {
    return(
      <header>
        <nav id='headerNavMenu'>
          <ul>
            <li>
              <h2>Konstantin<span>Veselovskii</span></h2>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink exact to='/' >
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' exact to='/projects'>
                <h2>Projects</h2>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' exact to='/about'>
                <h2>About</h2>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' exact to='/contacts'>
                <h2>Contacts</h2>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
};
