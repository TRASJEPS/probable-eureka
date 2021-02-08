import './App.css';
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      {/* <h1>Pokémon API</h1>
      <h5>There are too many of them!</h5> */}
      <Pokemon />
    </div>
  );
}

export default App;
