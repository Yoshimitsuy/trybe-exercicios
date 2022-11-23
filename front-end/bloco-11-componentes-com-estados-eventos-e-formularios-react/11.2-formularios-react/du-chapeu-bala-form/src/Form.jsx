import React, { Component } from 'react';
import EstadoFavorito from'./EstadoFavorito';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFav: '',
      idade: '',
      vai: false,
      maior: '',
    }
  }

  handleChange({target}) {
    // console.log(`comp pai ${target.value}`);

    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    })
    // console.log('log do value', target.value);
    // console.log('log no name', target.name);
    // console.log('log do type', target.type);
    // console.log('log do target', e);
  }

  render() {
    const { estadoFav, idade, vai, maior } = this.state

    return (
      <div>
        <div>Form</div>
        <form action="form">
          <EstadoFavorito
            propFormValue={estadoFav}
            formHandleChange={(e) => this.handleChange(e)}
          />

          <div>
            <input 
              value={idade}
              type="number"
              name="idade"
              onChange={ (e) => this.handleChange(e) }
              min="12"
              max="100"
              placeholder="idade"
            />
            <input value={vai}type="checkbox" name="vai" onChange={ (e) => this.handleChange(e) }/>
          </div>

          <div>
            <select
              id="age"
              name="maior"
              onChange={ (e) => this.handleChange(e) } value={ maior }
            >
              <option value="" disabled={true}>select</option>
              <option value="adult">+18</option>
              <option value="child">-18</option>
            </select>
          </div>

          <div>
            <input type="file" />
          </div>

        </form>
      </div>
    )
  }
}
