import React from "react";
import FormForAuth from "./FormForAuth";
import { authorize } from "../utils/Auth";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: this.props.email,
    //   password: this.props.password,
    //   // isLoading: this.props.isLoading,
    // };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.onLogin = this.onLogin.bind(this);
  // }

  // handleChange(obj) {
  //   this.setState(obj);
  }

  // onLogin() {
  //   this.setState({ isLoading: true });
  //   authorize(this.state.email, this.state.password)
  //     .then((data) => {
  //       if (data.token) {
  //         this.setState({ email: "", password: "" }, () => {
  //           this.props.loggedIn();
  //           this.props.history.push("/");
  //         });
  //       } else {
  //         return;
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  render() {
    return (
      <FormForAuth
        title="Вход"
        name="login"
        buttonName="Войти"
        onSubmit={this.props.handleLogin}
        isLoading={this.props.isLoading}
        email={this.props.email}
        password={this.props.password}
        onChange={this.props.onChange}
      />
    );
  }
}

export default withRouter(Login);
