import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={post:""}
  
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    console.log(e.target);
    this.setState({post: e.target.value});
  }
  

  render() {
    return (
      <div className="App">
      <h1>PostCode</h1>
      <input value={this.state.post}onChange={this.onChange}>
      </input>
      <button>Submit</button>
      <p>{this.state.post}</p>
      </div>
    );
  }
}

export default App;
