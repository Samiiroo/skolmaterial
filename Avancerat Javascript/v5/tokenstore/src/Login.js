import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const URL =
      "http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000/auth/";
    const payLoad = {
      email: this.email.current.value,
      password: this.password.current.value
    };
    axios
      .post(URL, payLoad)
      .then(response => {
        console.log(response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" ref={this.email} name="email" id="email" />
          <input
            type="password"
            ref={this.password}
            name="password"
            id="password"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
