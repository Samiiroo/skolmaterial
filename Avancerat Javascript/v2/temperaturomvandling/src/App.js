import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { celsius: '1.0' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      celsius: e.target.value,
    });
  }
 
  render() {
    return (
      <div className="App">
        <h1>Convert celsius</h1>
        <celsius
          value={this.state.celsius}
          onChange={this.onChange}
        />
        <InchToCm celsius={this.state.celsius} />
      </div>
    );
  }
}

export default App;