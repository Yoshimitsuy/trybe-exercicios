
import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    const { pokemons } = this.props;

    return (
      <div className='pokedex'>
        {pokemons.map(bicho => (
        <Pokemon 
          key={bicho.id} 
          pokemonCard={ bicho } 
        />

        ))}
      </div>
    
    );   
  }
}                   
    


export default Pokedex;