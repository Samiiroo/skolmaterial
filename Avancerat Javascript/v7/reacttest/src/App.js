import React, { Component } from 'react';
import './App.css';
import List from "./list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      array: [],
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  onClick(e) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    let obj = {
      value: this.state.value,
      id: id,
    }

    let newArray = [...this.state.array, obj];
    this.setState({
      array: newArray,
      value: "",
    })
  }

  onDelete(e) {
    let id = e.target.value;
    let newArray = [...this.state.array];
    this.setState({
      array: newArray.filter(item => item.id !== id),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Home__container">
          <div className="Home__container__box">
            <p>Todo</p>
            <input type="text" onChange={this.onChange} value={this.state.value}></input>
            <button onClick={this.onClick}>Add</button>
          </div>
          <div className="Home__container__box">
            <List array={this.state.array} onDelete={this.onDelete}></List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
