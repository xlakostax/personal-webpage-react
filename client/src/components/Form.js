import axios from "axios";
import dompurify from "dompurify";
// import { Link } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import Modal from "react-modal";
import React, { Component } from "react";
import styled from "styled-components";

import "axios-progress-bar/dist/nprogress.css";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  & form {
    margin-bottom: 1rem;
    & input:not([type = 'checkbox']), textarea {
      display: block;
      width: 100%;
      height: 2rem;
      margin: 0 0 1rem 0;
      border-radius: 5px 5px;
      border: 1px solid rgba( 220, 220, 220, 1 );
    }
    & textarea {
      height: 10rem;
    }
    & button {
      position: relative;
      padding: 1rem;
      background-color: transparent;
      height: 4rem;
      width: 6rem;
      border-radius: 5px 5px;
      border: 1px solid rgba( 47, 47, 47, 1 );
      text-transform: uppercase;
    }
    & button:hover {
      cursor: pointer;
      color: rgba(70, 130, 180);
      border: 1px solid rgba(70, 130, 180);
    }
    & div {
      display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex
      align-itrems: center;
    }
  }
  & span {
    color: rgba(70, 130, 180)
  }
  & :nth-child(4) {
    align-items: center;
    display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex
    justify-content: flex-start;
    margin: 0 0 1rem 0;
    & label {
      display: block;
      position: relative;
      height: 1.2rem;
      min-width: 1.2rem;
      margin-right: 1rem;
      font-size: 1rem;
      border: 1px solid rgba( 47, 47, 47, 1 );
      cursor: pointer;
      user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
      & input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        cursor: pointer;
      }
      & input:checked ~ span:after {
        display: block;
      }
      & span:after {
        border: solid black;
        border-width: 0 3px 3px 0;
        content: "";
        display: none;
        height: 10px;
        left: 6px;
        position: absolute;
        top: 3px;
        transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
        width: 5px;
      }
    }
    & a {
      position: relative;
      display: inline-block;
      /* color: rgba(70, 130, 180); */
      &:after {
        content: '';
        position: absolute;
        background-color: rgba(70, 130, 180, 0.5);
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
    }
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showModal: false,
      info: "",
      disabled: false,
      checked: false,
    }
  }

  componentDidMount = () => {
    loadProgressBar();
  };

  onChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value)
    console.log(this.state.name, this.state.email, this.state.checked)
    this.setState({
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  };

  onSubmitHandler = event => {
    event.preventDefault(); /* Prevent form submit from reloading the page */

    this.setState({
      disabled: true
    });

    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let formObj = {
      name: name,
      email: email,
      message: message
    };
    let axiosConfig = {
      /* Config headers to avoid CORS issues */
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(
        "https://us-central1-konstantin-veselovskii.cloudfunctions.net/app",
        formObj,
        axiosConfig
      ) /* POST request by axios to the function */
      .then(res => {
        if (res.data.msg === "success") {
          this.resetForm();
          this.setState({
            showModal: true,
            info: `Your message was sent <span>successfully</span>.`
          });
        } else if (res.data.msg === "fail" || res.status !== 200) {
          this.setState({
            showModal: true,
            info: `<span>Error.</span> Your message was not sent. Please check your connection or firewall settings.`
          });
        }
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      checked: false
    });
  };

  handleClosremodal = () => {
    this.setState({
      showModal: false,
      disabled: false
    });
  };

  onCheckHandler = () => {
    !this.state.checked ?
    this.setState({
      checked: true
    }) :
    this.setState({
      checked: false
    });
  };

  render() {
    const sanitizer = dompurify.sanitize;
    return (
      <Wrapper className="wrapper">
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleClosremodal}
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={false}
        >
          <i
            className="fas fa-times"
            onClick={this.handleClosremodal}
            style={{ cursor: "pointer", marginRight: "1rem" }}
          ></i>
          <p dangerouslySetInnerHTML={{ __html: sanitizer(this.state.info) }} />
        </Modal>
        <form onSubmit={this.onSubmitHandler}>
          <p>
            <label>
              Your name:
              <input
                id="name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChangeHandler}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea
                id="message"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.onChangeHandler}
                required
              />
            </label>
          </p>
          {/* <div>
            <label>
              <input
                id="checkbox"
                type="checkbox"
                checked={this.state.checked}
                onChange={this.onCheckHandler}
                required
              />
              <span></span>
            </label>
            <p>I have read and accepted the <Link to="/policy">Privacy Policy</Link></p>
          </div> */}
          <div>
            <button type="submit" name="send" disabled={this.state.disabled}>
              Send
            </button>
          </div>
        </form>
      </Wrapper>
    );
  }
}
