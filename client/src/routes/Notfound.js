import React from "react";

/*Import libraries*/
import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  & p {
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-size: 3em;
  }
  & a {
    position: relative;
    display: inline-block;
    /* color: rgba(70, 130, 180); */
    &:after {
      content: '';
      position: absolute;
      /*background-color: rgba(70, 130, 180, 0.5);*/
      background-color: #46B29A;
      top: 60%;
      left: -0.1rem;
      right: -0.1rem;
      bottom: 0;
      z-index: -1;
      transition: top 200ms ease-in-out;
    }
    &:hover:after {
      top: 0%;
    }
`;

const NotFound = () => {
  return (
    <Main>
      <p>404 <br />
      Page not found</p> <br />
      <a href="/">Go back home</a>
    </Main>
  )
};

export default NotFound
