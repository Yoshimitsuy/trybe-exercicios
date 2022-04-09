import './App.css'; // rafael yoshimitsuy
import { Component } from 'react'; //forma mais simples de importar o react e o component

class App extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.hcDigimon = this.hcDigimon.bind(this);
    this.hcCuecmon = this.hcCuecmon.bind(this);

    this.state = {
      pokeClick: 0,
      digiClick: 0,
      cueClick: 0,
    }
  }

  handleClick() { // função dentro da classe não precisa da palavra 'function'.
    console.log('charizard é foda')
    // console.log(this); // este 'this' agora é lido pelo log porque foi dado o 'bind' dentro do constructor
    this.setState( (estadoAnterior, _props) => ({
      pokeClick: estadoAnterior.pokeClick + 1,
    }))
  }
  
  hcDigimon() {
    console.log('bafo de pimenta')
    this.setState( ({ digiClick }) => ({
      digiClick: digiClick + 1,
    }))
  }
  
  hcCuecmon() {
    console.log('a vida é uma mulher grávida')
    this.setState( (estadorAntes, _props) => ({
      cueClick: estadorAntes.cueClick + 1,
    }), () => {
      console.log(`CK ${this.changeColor(this.state.cueClick)}`);
    })
  }

  changeColor(number) {
    return number % 2 === 0 ? 'green' : 'red';
  }


  render() { // 
    const { pokeClick, digiClick, cueClick } = this.state;
    return (
      <div className="App">
        <button 
        style={ {backgroundColor: this.changeColor(pokeClick)} }
        onClick={ this.handleClick }> 
        {`Pokemon ${this.state.pokeClick}`} 
        </button> 

        <button 
        style={ {backgroundColor: this.changeColor(digiClick)} }
        onClick={ this.hcDigimon }> 
        {`Digimon ${this.state.digiClick}`} 
        </button>

        <button
        style={ {backgroundColor: this.changeColor(cueClick)} }
        onClick={ this.hcCuecmon }> 
        {`Cuecmon ${this.state.cueClick}`} 
        </button>
      </div>
    );
  }
}

export default App;
