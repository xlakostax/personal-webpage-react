import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & article {
    height: 70%;
    text-align: justify;
    & h1 {
      font-size: 2em;
      margin: 1.2em 0;
      position: relative;
    }
    & div {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      & i {
        color: rgba( 220, 220, 220, 0.5 );
        font-size: 20em;
      }
    }
  }
`;

const Blog = () => {
  return(
    <>
      <Header />
      <Main>
        <article>
          <h1>Blog</h1>
          <div>
            <p>
              <i class="swg swg-deathstar swg-6x"></i>
            </p> <br />
            <p>Under construction</p> <br />
          </div>
        </article>
      </Main>
      <Footer />
    </>
  );
}
export default Blog;
