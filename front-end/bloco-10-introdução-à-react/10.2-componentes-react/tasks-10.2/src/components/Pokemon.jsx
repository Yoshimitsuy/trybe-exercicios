
import React from 'react';


class Pokemon extends React.Component {
  render() {

    const { pokemonCard: { name, type, averageWeight, image } } = this.props;

    return (
      <div className='pokemon'>
        <section>
          
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight : ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          
        </section>
        <img src={ image } alt={ `${name} duud`} />
      </div>
    
    );   
  }
}                   
    


export default Pokemon;