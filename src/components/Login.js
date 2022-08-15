import React from "react";
//import { Link } from 'react-router-dom';
import FormForAuth from "./FormForAuth";
import {authorize} from "./Auth";
import { withRouter } from 'react-router-dom'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange=this.handleChange.bind(this);
    this.onLogin=this.onLogin.bind(this);
  }

  handleChange(obj){
    this.setState(obj)
  }

  onLogin(){
    
authorize(this.state.email, this.state.password).then((data) => {
  if (data.token){
    this.setState({email: '', password: ''} ,() => {
        this.props.loggedIn();
        debugger
        this.props.history.push('/mesto');
    })
  }  
})
.catch(err => console.log(err));
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

export default withRouter(Login);
