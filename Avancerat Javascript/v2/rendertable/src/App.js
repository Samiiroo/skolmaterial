import React, { Component } from 'react';
import './App.css';

import Table from './Table';

const people= [
  {
    name: 'Samir',
    age: 26,
  },
  {
    name: 'Samir Jr',
    age: '10'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={people} />
      </div>
    );
  }
}

export default App;