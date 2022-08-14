import React from "react";
//import { Link } from 'react-router-dom';
import FormForAuth from "./FormForAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(obj){
    this.setState(obj)
  }

  onLogin(){

  }

  render() {
    return (
      <FormForAuth
        title="Вход"
        name="login"
        buttonName="Войти"
        onSubmit={this.onLogin}
        // isLoading={isLoading}
        email={this.state.email}
        password={this.state.password}
        onChange={this.handleChange}
      />
    );
  }
}

export default Login;
