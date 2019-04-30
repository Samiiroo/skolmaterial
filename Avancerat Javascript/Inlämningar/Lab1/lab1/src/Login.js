import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedCorrectly: true,
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }


  render() {
    return (
      <div className='login-Cont'>
        <input type='text' required name='login-form' className='login-form' placeholder='Username' minLength='2' maxLength='12'
          onChange={this.handleChange}>

        </input>
        <input
          className="login-button"
          type="button"
          onClick={() => this.props.handleLogin(this.usernameInput.value)}
          value="Logga in"
        />
      </div>
    )
  }
}
export default Login;