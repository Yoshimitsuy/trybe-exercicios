import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';

// import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
        
      </div>
    );
  }
}

export default App;
