import React, { Component } from 'react';
import './App.css';

function validatePostCode(str) {
  return /^\d{3} \d{2}$/.test(str);
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state={post:"",valid:false};

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    console.log(e.target);
    this.setState({post: e.target.value});
  }
  onClick(){
    const isValid = validatePostCode(this.state.post);
    if (isValid){
      this.setState()
    }
  }

  render() {
    return (
      <div className="App">
      <h1>PostCode</h1>
      <input type="text" value={this.state.post}onChange={this.onChange}>
      </input>
      <button onClick={this.onClick}>Submit</button>
      <p>{this.state.post}</p>
      </div>
    );
  }
}

export default App;
