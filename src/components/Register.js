import React from "react";
import { Link } from "react-router-dom";
import FormForAuth from "./FormForAuth";
import {register} from "./Auth";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange=this.handleChange.bind(this);
    this.onRegister=this.onRegister.bind(this);
  }

  handleChange(obj){
    this.setState(obj)
  }

  onRegister(){

register(
this.state.email,
  this.state.password
)
  }

  render() {
    return (
      <FormForAuth
        title="Регистрация"
        name="registration"
        buttonName="Зарегистрироваться"
        onSubmit={this.onRegister}
   //     isLoading={isLoading}
        email={this.state.email}
        password={this.state.password}
        onChange={this.handleChange}
      >
        <span className="register__caption">
          Уже зарегистрированы? &nbsp;
          <Link to="/sign-in" className="register__caption-link">
             Войти
          </Link>
        </span>
      </FormForAuth>
    );
  }
}

export default Register;
