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

export default class Success extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 5 };
    this.timer = 0;
    // this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "s": seconds
    };
    return obj;
  }

  componentDidMount = () => {
    // setTimeout(() => { window.location.replace("/contacts") }, 5000);
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  };

  startTimer(){
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      window.location.replace("/contacts");
    }
  };

  render() {
    return (
      <Main>
        <p>Sent </p><br />
        <a href="/">Go back home</a>
        m: {this.state.time.m} s: {this.state.time.s}
      </Main>
    )
  }
}
