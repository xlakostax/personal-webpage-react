import React, {
  useEffect,
  useState
} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import data from "../components/Menu"

const Main = styled.main`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  position: relative;
  display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 5%;
  & h1 {
    font-size: 8rem;
    line-height: 1;
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 6rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 4rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 3rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 2rem;
    }
    & span {
      font-weight: 400;
    }
  }
  & h2 {
    font-size: 2rem;
    font-weight: 400;
    padding-right: 0.5em;
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 1.5rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 0.75rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 0.5rem;
    }
    @media (min-width: 375px) and (max-width: 424px) and (orientation: portrait) {
      font-size: 1.125rem;
    }
    @media (min-width: 320px) and (max-width: 374px) and (orientation: portrait) {
      font-size: 0.75rem;
    }
  }
  & ul {
    @media (min-width: 1024px) and (max-width: 1439px) {
      line-height: 1.125rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 0.75rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      font-size: 0.5625rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      font-size: 0.375rem;
    }
  }
  & section {
    margin-top: 1rem;
    @media (min-width: 1024px) and (max-width: 1439px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0.5rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.375rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      margin-top: 0.25rem;
    }
    & i {
      font-size: 2rem;
      padding-right: 0.2em;
      @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 1.5rem;
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1rem;
      }
      @media (min-width: 475px) and (max-width: 767px) {
        font-size: 0.75rem;
      }
      @media (min-width: 320px) and (max-width: 474px) {
        font-size: 0.5rem;
      }
      @media (min-width: 375px) and (max-width: 424px) and (orientation: portrait) {
        font-size: 1.125rem;
      }
      @media (min-width: 320px) and (max-width: 374px) and (orientation: portrait) {
        font-size: 0.75rem;
      }
    }
    & i:hover {
      transition: color 100ms linear;
      /* color: rgb( 255, 99, 71 ); */
      /* color: rgba(70,130,180,0.5);*/
      color: #46B29A;
    }
    & li {
      display: inline-block;
    }
  }
  & nav {
    margin-top: 1rem;
    @media (min-width: 1024px) and (max-width: 1439px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0.5rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.375rem;
    }
    @media (min-width: 320px) and (max-width: 474px) {
      margin-top: 0.25rem;
    }
    @media (min-width: 475px) and (max-width: 767px) {
      margin-top: 0.75rem;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 0.5rem;
    }
    & h2 {
      &:hover {
        transition: color 100ms linear;
        /* color: rgb( 255, 99, 71 ); */
        /*color: rgba(70,130,180,0.5);*/
        color: #46B29A;
      }
    }
    & li {
      display: inline-block;
      @media (min-width: 320px) and (max-width: 767px) {
        display: inline;
      }
    }
  }
`;

const Home = () => {
  const [transform, setTransform] = useState("")
  useEffect(() => {
    function parallax(e) {
      let smth = document.querySelectorAll('.titleContainer');
      smth.forEach( element => {
          let speed = element.getAttribute('speed');
          let x = ( window.innerWidth - e.pageX * speed) / 100;
          let y = ( window.innerWidth - e.pageY * speed) / 100;
          setTransform(`translateX(${x}px) translateY(${y}px)`)
      })
    }
    window.addEventListener("mousemove", parallax)
    return () => {
      window.removeEventListener("mousemove", parallax)
    }
  }, [transform])

  let menu = data.slice( 0, 4 ).map ( ( element ) => {
    return (
      <li key = { element.id }>
        <NavLink exact to = { element.path }>
          <h2>{ element.title }</h2>
        </NavLink>
      </li>
    );
  });

  let links = data.slice( 3 ).map ( ( element ) => {
    return (
      <li key = { element.id }>
        <a href = { element.url } target = '_blank' rel = 'noopener noreferrer'>
          <i className = { element.icon }></i>
        </a>
      </li>
    );
  });

  return(
    <Main>
      <div id = 'titleContainer' className = 'titleContainer' speed = "2" style = {{ transform: `${transform}` }}>
        <h1>
          <span>I'm </span>
          Konstantin
          <br />
          Veselovskii
        </h1>
        <section>
          <ul>
            <li>
              <h2>a web developer</h2>
            </li>
            {links}
          </ul>
        </section>
        <nav>
          <ul>
            {menu}
          </ul>
        </nav>
      </div>
    </Main>
  )
}

export default Home;
