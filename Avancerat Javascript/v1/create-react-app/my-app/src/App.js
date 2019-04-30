import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "World"
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.length > 0) {
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        name: "World"
      });
    }
  }
  
  render() {
    const name = this.state.name;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange={this.onChange} /> 
          <p>hello {this.state.name}</p>
       
        </header>
      </div>
    );
  }
}

export default App;
