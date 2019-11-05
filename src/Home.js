import React, { Component } from 'react';
import { TweenLite, TweenMax } from 'gsap/all';
import { NavLink } from "react-router-dom";
import $ from "jquery";
import './Home.css';


class Home extends Component {
  /* Parallax effect using gsap from side sources */
  componentDidMount() {
    if(window.screen.width>=1360){
      var rect = $('#root')[0].getBoundingClientRect();
      var mouse = {x: 0, y: 0, moved: false};

      $('#root').mousemove(function(e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      TweenLite.ticker.addEventListener('tick', function(){
        if (mouse.moved){
          parallaxIt("#titleContainer", -30);
        }
        mouse.moved = false;
      });

      function parallaxIt(target, movement) {
        TweenMax.to(target, 0.3, {
          x: (mouse.x - rect.width / 2) / rect.width * movement,
          y: (mouse.y - rect.height / 2) / rect.height * movement
        });
      }

      $(window).on('resize scroll', function(){
        rect = $('#root')[0].getBoundingClientRect();
      })
    }
  }
  render() {
    return(
      <main>
        <div id="titleContainer">
          <h1>
            <span>I'm </span>
            Konstantin
            <br />
            Veselovskii
          </h1>
          <div id="subtitleContainer">
            <ul>
              <li>
                <h2>a web developer</h2>
              </li>
              <li>
                <a href="https://github.com/xlakostax">
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/veselovskii/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/xlakostax">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <nav id="navMenu">
            <ul>
              <li>
                <NavLink to="/projects">
                  <h2>Projects</h2>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <h2>About</h2>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">
                  <h2>Contacts</h2>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    )
  }
}

export default Home;
