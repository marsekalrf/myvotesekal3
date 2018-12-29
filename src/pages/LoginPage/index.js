import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginPage from './LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
    username: '',
    password: '',
    isRegisterPageOpen : false
    };

    this.handleRegisterPage = this.handleRegisterPage.bind(this);
    this.handleBackLogin = this.handleBackLogin.bind(this);
  }

  handleRegisterPage(){
    this.setState({isRegisterPageOpen:true})
  }

  handleBackLogin(){
    this.setState({isRegisterPageOpen:false})
  }

  handleOnChange(data){
    const { name, value } = data;
    this.setState({[name]: value});
  }

  render() {
    const isRegPage = this.state.isRegisterPageOpen
    if(isRegPage){
      return (
        <RegisterPage/>
      )
    }
    return (
      <LoginPage/>
    )
  }
}

const mapStateToProps = state => ({
  session : state.voter
})

export default connect(mapStateToProps)(Login);