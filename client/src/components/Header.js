import React from 'react';

/*Import components*/
import {HeaderTag} from "../styles/styled";

/*Import libraries*/
import { NavLink } from 'react-router-dom';

import data from "./Menu"

const Header = () => {
  let menu = data.slice( 0, 4 ).map ( ( e ) => {
    return (
      <li key = { e.id }>
        <NavLink exact to = { e.path }>
          <h2>{ e.title }</h2>
        </NavLink>
      </li>
    );
  });
  return(
    <HeaderTag>
      <NavLink exact to = '/'>
        <h2 className = 'logo'><span>Konstantin</span><span>Veselovskii</span></h2>
      </NavLink>
      <input id = 'menu-btn' className = 'menu-btn' type = 'checkbox'/>
      <label className = 'menu-icon' htmlFor = 'menu-btn'>
        <span className = 'navicon'></span>
      </label>
      <nav id = 'nav'>
        <ul className = 'menu'>
          { menu }
        </ul>
      </nav>
    </HeaderTag>
  )
}

export default Header;
