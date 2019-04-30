import React, { useState } from 'react';
import './App.css';
const COUNTR = ['Palestine', 'Sweden', 'Denmark'];
function App() {
  const [country, updateC] = useState("Palestine");
  return (
    <p>Whats you Favorite Country?</p>
    <form className="App-form">
      {COUNT.map(country)}
    </form>
  )
}


export default App;
