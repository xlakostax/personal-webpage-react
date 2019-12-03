import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: justify;
  & form {
    position: relative;
    margin: 10em:
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

const modalText = {
  position: 'absolute',
  display: 'block',
  width: '100vw',
  height: '100vh',
  top: 0, right: 0, bottom: 0, left: 0,
  margin: '0 auto',
  textAlign: 'center',
  zIndex: '9999'
}

class Form extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind( this );
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
        }).then((response)=>{
            if (response.data.msg === 'success'){
                // alert("Message Sent.");
                this.resetForm();
                this.setState({ showModal: true });
            }else if(response.data.msg === 'fail'){
                // alert("Message failed to send.")
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

    handleCloseModal = () => {
      this.setState( { showModal: false } )
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
        {/*<form action="/contacts" method="post" netlify onSubmit={this.submitForm.bind(this)}>*/}
        <form method="post" onSubmit={this.onSubmitHandler}>
          <Modal
            isOpen = { this.state.showModal }
            contentLabel = 'onRequestClose'
            onRequestClose = { this.handleCloseModal }
            className = 'Modal'
            shouldCloseOnOverlayClick = { false }
            style = {{modalText}}
          >
            <i className='fas fa-times' onClick = { this.handleCloseModal }  style = { { cursor: 'pointer', margin: '10px' } }></i>
            <h4>Sent successful</h4>
          </Modal>
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
