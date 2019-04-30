import React, { Component } from "react";
import "./App.css";
import Login from './Login';
import Chat from './Chat'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      username: "",
      messages: []
    };

    this.logIn = this.logIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
  }
  logIn(username) {
    this.setState({
      loggedIn: true,
      username: username,
    });
  }
  loggedOut() {
    this.setState({
      loggedIn: false,
      username: "",
    });
  }



  render() {
    return (
      <div className="App">
        {!this.state.signedin ? (
          <Login login={this.signIn} />
        ) : (
            <Chat
              username={this.state.username}
              messages={this.state.messages}
              logout={this.logOut}
              sendmessage={this.sendMessage}
            />
          )}
      </div>
    );
  }
}

export default App;