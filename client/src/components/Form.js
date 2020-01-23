import axios from 'axios';
import { Link } from 'react-router-dom';
import { loadProgressBar } from 'axios-progress-bar'
import Modal from 'react-modal';
import React, { Component } from 'react';
import styled from 'styled-components';

import 'axios-progress-bar/dist/nprogress.css';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  & form {
    margin-bottom: 1em;
    & input:not([type = 'checkbox']), textarea {
      display: block;
      width: 100%;
      height: 2em;
      margin: 0 0 1em 0;
      border-radius: 5px 5px;
      border: 1px solid rgba( 220, 220, 220, 1 );
    }
    & textarea {
      height: 10em;
    }
    & button {
      position: relative;
      padding: 1em;
      background-color: transparent;
      height: 4em;
      width: 6em;
      border-radius: 5px 5px;
      border: 1px solid rgba( 47, 47, 47, 1 );
      text-transform: uppercase;
    }
    & button:hover {
      cursor: pointer;
      color: rgb( 255, 99, 71 );
      border: 1px solid rgb( 255, 99, 71 );
    }
    & div {
      display: flex;
      align-items: center;
    }
  }
  & span {
    color: rgb( 255, 99, 71 )
  }
  & :nth-child(4) {
    align-items: center;
    display: flex;
    justify-contenr: flex-start;
    margin: 0 0 1em 0;
    & a {
      display: inline-block;
      color: rgb( 255, 99, 71 );
    }
    & a:after {
      content: '';
      display: block;
      width: 0%;
      height: 1px;
      background: rgb( 255, 99, 71 );
      transition: 300ms;
    }
    & a:hover:after {
      width: 100%;
    }
  }
`;

export default class Form extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        name: '',
        email: '',
        message: '',
        showModalSuccess: false,
        showModalError: false,
        disabled: false
    };
    this.onSubmitHandler = this.onSubmitHandler.bind( this );
    this.onChangeHandler = this.onChangeHandler.bind( this );
    this.resetForm = this.resetForm.bind(this);
    this.handleCloseModalSuccess = this.handleCloseModalSuccess.bind( this );
    this.handleCloseModalError = this.handleCloseModalError.bind( this );
  }

  componentWillMount = () => {
    loadProgressBar();
  }

  onChangeHandler = ( event ) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
        [name]: value, /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  }

  onSubmitHandler = ( event ) => {
    event.preventDefault(); /* Prevent form submit from reloading the page */

    this.setState({ disabled: true })

    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let formObj = {
        name: name,
        email: email,
        message: message
    };
    let axiosConfig = { /* Config headers to avoid CORS issues */
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*"
      }
    };

    axios
    .post( 'https://us-central1-konstantin-veselovskii.cloudfunctions.net/app', formObj, axiosConfig ) /* POST request by axios to the function */
    .then( ( res ) => {
        // console.log( res.status )
        if ( res.data.msg === 'success' ) {
            this.resetForm();
            this.setState({ showModalSuccess: true });
        } else if ( res.data.msg === 'fail' || res.status !== 200 ) {
            this.setState({ showModalError: true });
        }
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        email: '',
        message: ''
    });
  }

  handleCloseModalSuccess = () => {
    this.setState({
      showModalSuccess: false,
      disabled: false
     })
  }

  handleCloseModalError = () => {
    this.setState({
      showModalSuccess: false,
      disabled: false
     })
  }

  render() {
    return(
      <Wrapper className = 'wrapper'>
        <Modal
            isOpen = { this.state.showModalSuccess }
            contentLabel = 'onRequestClose'
            onRequestClose = { this.handleCloseModalSuccess }
            className = 'Modal'
            overlayClassName = 'Overlay'
            shouldCloseOnOverlayClick = { false }
        >
          <i className = 'fas fa-times' onClick = { this.handleCloseModalSuccess }></i>
          <p>Your message was sent <span>successfully</span>.</p>
        </Modal>
        <Modal
            isOpen = { this.state.showModalError }
            contentLabel = 'onRequestClose'
            onRequestClose = { this.handleCloseModalError }
            className = 'Modal'
            overlayClassName = 'Overlay'
            shouldCloseOnOverlayClick = { false }
        >
          <i className = 'fas fa-times' onClick = { this.handleCloseModalError }></i>
          <p><span>Error.</span> Your message was not sent. Please check your connection or firewall settings.</p>
        </Modal>
        <form onSubmit = {this.onSubmitHandler}>
          <p>
            <label>Your name:
              <input id = 'name' type = 'text' name='name' value = { this.state.name } onChange = { this.onChangeHandler } required/>
            </label>
          </p>
          <p>
            <label>Your email:
              <input id = 'email' type = 'email' name='email' value = { this.state.email } onChange = { this.onChangeHandler } required/>
            </label>
          </p>
          <p>
            <label>Message:
              <textarea id = 'message' type = 'text' name = 'message' value = { this.state.message } onChange = { this.onChangeHandler } required/>
            </label>
          </p>
          <p>
            <input type = 'checkbox' required /> <p>I have read and accepted the <Link to = '/policy'>Privacy Policy</Link></p>
          </p>
          <div>
            <button type='submit' name='send' disabled = { this.state.disabled }>Send</button>
          </div>
        </form>
      </Wrapper>
    )
  }
}
