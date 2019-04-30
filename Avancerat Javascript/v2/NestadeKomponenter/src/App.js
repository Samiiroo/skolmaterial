import React, { Component } from 'react';
import './App.css';



class List extends Component {
  render(){
    return(
      <ul className="List">{this.props.children}</ul>
    )
  }
}
const PLANETS= ['Mercury','Venus','Eart','Mars','Saturn'];
function cLI(PLANETS){
  return  <li>{PLANETS}</li>
}
class ListItem extends Component{
  render(){
    return(
      <li className="ListItem">{this.props.children}</li>
    )
  }
}

class App extends Component {
  render() {
    return (
      <List>{PLANETS.map(cLI)}</List>
    )
  }
}

export default App;
