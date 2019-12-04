import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: justify;
  /* & .Modal {

  }
  & .Overlay {

  } */
  & form {
    position: relative;
    margin: 10em:
  }
  & span {
    color: rgb(255, 99, 71)
  }
  & input, textarea {
    display: block;
    width: 100%;
    height: 2em;
    margin: 0 0 1em 0;
    border-radius: 5px 5px;
    border: 1px solid rgba(220, 220, 220, 1);
  }
  & textarea {
    height: 10em;
  }
  & button {
    padding: 1em;
    background-color: transparent;
    border-radius: 5px 5px;
    border: 1px solid rgba(47, 47, 47, 1);
    text-transform: uppercase;
  }
  & button:hover {
    cursor: pointer;
    color: rgb(255, 99, 71);
    border: 1px solid rgb(255, 99, 71);
  }
  & h4 {
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-size: 3em;
  }
`;

const modal = {
  position: 'absolute',
  display: 'block',
  width: '100vw',
  height: '100vh',
  top: 0, right: 0, bottom: 0, left: 0,
  margin: '0 auto',
  textAlign: 'center',
}

class Form extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      name: '',
      email: '',
      message: '',
      showModalSuccess: false,
      showModalError: false
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCloseModalSuccess = this.handleCloseModalSuccess.bind( this );
    this.handleCloseModalError = this.handleCloseModalError.bind( this );
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    axios({
      method: "POST",
      url:"http://localhost:3001/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    })
    .then( ( response ) => {
      if ( response.data.msg === 'success' ) {
        this.resetForm();
        this.setState( { showModalSuccess: true } );
      } else if ( response.data.msg === 'fail' ) {
        this.setState( { showModalError: true } );
      }
    })
  }

  resetForm = (event) => {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  handleCloseModalSuccess = () => {
    this.setState( { showModalSuccess: false } )
  }

  handleCloseModalError = () => {
    this.setState( { showModalError: false } )
  }

  render() {
    const Input = (props) => {
      return (
        <p>
          <label>{props.nameData}
            <input type = {props.type} name = {props.name} value = {props.value} onChange = {props.onChange} required />
          </label>
        </p>
      )
    }
    return(
      <Wrapper>
        <Modal
          isOpen = { this.state.showModalSuccess }
          contentLabel = 'onRequestClose'
          onRequestClose = { this.handleCloseModalSuccess }
          className = 'Modal'
          overlayClassName = 'Overlay'
          shouldCloseOnOverlayClick = { false }

        >
          <i className='fas fa-times' onClick = { this.handleCloseModalSuccess }  style = { { cursor: 'pointer', margin: '10px' } }></i>
          <p>Your message was sent successfully.</p>
        </Modal>
        <Modal
          isOpen = { this.state.showModalError }
          contentLabel = 'onRequestClose'
          onRequestClose = { this.handleCloseModalError }
          className = 'Modal'
          overlayClassName = 'Overlay'
          shouldCloseOnOverlayClick = { false }
        >
          <i className='fas fa-times' onClick = { this.handleCloseModalError }  style = { { cursor: 'pointer', margin: '10px' } }></i>
          <p><span>Error.</span> Your message was not sent. Please check your connection or firewall settings.</p>
        </Modal>
        {/*<form action="/contacts" method="post" netlify>*/}
        <form method="post" onSubmit={this.onSubmitHandler}>
          <Input id = 'name' nameData = 'Your name: ' type = 'text' name = 'name' value = {this.state.name} onChange={this.onChangeHandler}/>
          <Input id = 'email' nameData = 'Your email: ' type = 'email' name = 'email' value = {this.state.email} onChange={this.onChangeHandler}/>
          <p>
            <label>Message:
              <textarea id = 'message' name="message" required value = {this.state.message} onChange={this.onChangeHandler}/>
            </label>
          </p>
          <button type="submit" name="send">Send</button>
        </form>
      </Wrapper>
    )
  }
}
export default withRouter(Form);
