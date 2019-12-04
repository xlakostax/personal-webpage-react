import React, { Component } from "react";
import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
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
    display: inline-block;
    color: red;
    text-transform: uppercase;
  }
  & a:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: rgb(255, 99, 71);
    transition: 300ms;
  }
  & a:hover:after {
    width: 100%;
  }
`;

export default class Error extends Component {
  componentDidMount = () => {
    setTimeout(() => { window.location.replace("/contacts") }, 5000);
  };
  render() {
    return (
      <Main>
        <p>Error </p><br />
        <a href="/">Go back home</a>
      </Main>
    )
  }
}
