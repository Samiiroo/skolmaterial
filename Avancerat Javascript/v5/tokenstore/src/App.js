import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
const home = () => <p>hej</p>;
const about = () => <p>hejsan</p>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/about"> home</Link>
          <Link to="/Login"> Login Page</Link>
          <Route path="/" exact component={home} />
          <Route path="/about" component={about} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
