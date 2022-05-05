// este componente foi um exercício teste da parte Requisições e componentDidMount
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    console.log(characters);
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
        {characters.map(({ name, image, created }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
              <p>{created}</p>
            </div>
          )
        })}
      </div>
      </div>
    );
  }
}

export default App;