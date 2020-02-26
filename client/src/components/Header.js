import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
  display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
  grid-area: header;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  width: 80%;
  top: 0; right: 0; bottom: 0; left: 0;
  padding: 1.2rem 0;
  background-color: white;
  z-index: 3;
  box-shadow: 0 1px rgba( 220, 220, 220, 1 );
  /* to avoid 'jumping' of fixed header */
  transform:translateZ(0);
    -webkit-transform:translateZ(0);
    -moz-transform:translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform:translateZ(0);
  @media (max-width: 374px) {
    width: 90%;
  }
  /* & .active {
    color: rgb(255, 99, 71);
  }
  & .active:after, .inactive:after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    transition: 300ms;
  }
  & .active:after {
    background: rgb(255, 99, 71);
  }
  & .inactive:after {
    background: rgba(47, 47, 47, 1);
  }
  & .active:hover:after, .inactive:hover:after {
    width: 100%;
  } */
  & .logo {
    font-weight: 400;
    font-size: 1.2rem;
    & span {
      display: inline-block
      transition: transform .2s ease-in-out;
      transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transition: translateY(0);
        -o-transform: translateY(0);
    }
    & :nth-child(2) {
      font-weight: 800;
    }
    &:hover :nth-child(2) {
      transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        -moz-transform: translateY(-2px);
        -ms-transition: translateY(-2px);
        -o-transform: translateY(-2px);
    }
    &:hover :first-child {
      transform: translateY(2px);
        -webkit-transform: translateY(2px);
        -moz-transform: translateY(2px);
        -ms-transition: translateY(2px);
        -o-transform: translateY(2px);
    }
  }
  & nav {
    @media ( max-width: 767px ) {
      color: rgb( 255, 255, 255 );
      transition: transform 1s ease-in-out;
        -webkit-transition: transform 1s ease-in-out;
        -moz-transition: transform 1s ease-in-out;
        -ms-transition: transform 1s ease-in-out;
        -o-transition: transform 1s ease-in-out;
      top: 0;
      bottom: 0;
      min-height: 100vh;
      position: fixed;
      width: 100vw;
      background-color: rgba( 47, 47, 47, 0.9 );
      transform: translateX( -200vw );
        -webkit-transform: translateX(-200vw);
        -moz-transform: translateX(-200vw);
        -ms-transition: translateX(-200vw);
        -o-transform: translateX(-200vw);
    }
    & ul {
      display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;

      @media (max-width: 767px) {
        display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
        flex-direction: column;
        /* align-items: left; */
        justify-content: center;
        height: 100%;
      }
      & li {
        color: rgb( 255, 255, 255 )
        display: inline-block;
        margin: 0 1rem;
        @media (min-width: 425px) and (max-width: 767px) {
          /* font-size: 4rem; */
          /* forcing <li>'s width to be the same as it's content */
          /* float:left;
          clear:left; */
          /* forcing <li>'s width to be the same as it's content */
        }
        @media (min-width: 425px) and (max-width: 767px) {
          font-size: 3rem;
        }
        @media (max-width: 424px) {
          font-size: 2rem;
        }
        & h2 {
          position: relative;
          font-weight: 400;
          font-size: 1.2rem;
          &:after {
            content: '';
            position: absolute;
            background-color: rgba(70, 130, 180, 0.5);
            top: 60%;
            left: -0.1em;
            right: -0.1em;
            bottom: 0;
            z-index: -1;
            transition: top 200ms ease-in-out;
            @media (max-width: 767px) {
              background-color: transparent;
            }
            /* transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1) */
          }
          &:hover:after {
            top: 0%;
          }
          @media (min-width: 375px) and  (max-width: 767px) {
            font-size: 4rem;
          }
          @media (max-width: 374px) {
            font-size: 3rem;
          }
          @media (max-width: 767px) and (orientation: landscape) {
            /* text-align: center; */
          }
        }
        & h2:hover {
          /* background-image: linear-gradient( transparent 0%, transparent calc(50% - 9px), rgba(255, 99, 71, 0.35) calc(50% - 9px), rgba(255, 99, 71, 0.35) 100% );
          background-position: 0 100%; */
          @media (max-width: 767px) {
            background-image: none;
          }
        }
      }
    }
  }
  & .menu-btn {
    display: none;
    &:checked ~ nav {
      transform: translateX(-10%);
        -webkit-transform: translateX(-10%);
        -moz-transform: translateX(-10%);
        -ms-transition: translateX(-10%);
        -o-transform: translateX(-10%);
        @media (max-width: 374px) {
          -webkit-transform: translateX(-5%);
          -moz-transform: translateX(-5%);
          -ms-transition: translateX(-5%);
          -o-transform: translateX(-5%);
        }
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
      &:before {
        transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transition: rotate(-45deg);
          -o-transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transition: rotate(45deg);
          -o-transform: rotate(45deg);
      }
      &:before, :after {
        top: 0;
        background: rgb( 255, 255, 255 );
        transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -webkit-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -moz-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -ms-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
          -o-transition: top .3s ease-out, transform .3s ease-out .3s, background .3s ease-out .7s;
      }
    }
  }
  & .menu-icon {
    cursor: pointer;
    user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    z-index: 999;
    margin-left: 3rem;
    & .navicon {
      background: rgba( 47, 47, 47 );
      display: none;
      height: 2px;
      position: relative;
      transition: background .1s ease-out 0.3s;
        -webkit-transition: background .1s ease-out 0.3s;
        -moz-transition: background .1s ease-out 0.3s;
        -ms-transition: background .1s ease-out 0.3s;
        -o-transition: background .1s ease-out 0.3s;
      width: 2rem;
      @media (max-width: 767px){
        display: block;
      }
      &:before, :after {
        background: rgba( 47, 47, 47 );
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: transform .3s ease-out, top .3s ease-out .3s;
          -webkit-transition: transform .3s ease-out, top .3s ease-out .3s;
          -moz-transition: transform .3s ease-out, top .3s ease-out .3s;
          -ms-transition: transform .3s ease-out, top .3s ease-out .3s;
          -o-transition: transform .3s ease-out, top .3s ease-out .3s;
        width: 100%;
        transform: rotate(0);
          -webkit-transform: rotate(0);
          -moz-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
      }
      &:before {
        top: 10px;
      }
      &:after {
        top: -10px;
      }
    }
  }
`;

const Header = () => {
  var data = require( '../menu.json' );
  var menu = data.slice( 0, 4 ).map ( ( elrement ) => {
    return (
      <li key = { elrement.id }>
        <NavLink exact to = { elrement.path }>
          <h2>{ elrement.title }</h2>
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
