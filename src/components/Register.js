import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

class Register extends React.Component {
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

  onRegister(){

  }

  render() {
    return (
      <Auth
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
      </Auth>
    );
  }
}

export default Register;
