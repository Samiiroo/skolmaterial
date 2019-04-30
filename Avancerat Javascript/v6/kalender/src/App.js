import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {

    }
  }
  getApi() {
    axios
      .get('https://api.dryg.net/dagar/v2.1/2015/02/01' + this.props.data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
