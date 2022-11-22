import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFav: '',
      idade: 0,
      vai: false,
      maior: false,
    }
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    })
    // console.log('log do value', e.target.value);
    // console.log('log no name', e.target.name);
    // console.log('log do type', e.target.type);
    // console.log('log do target', e);
  }

  render() {
    return (
      <div>
        <div>Form</div>
        <form action="form">
          
          <label>
            digite aqui uma porra
              <textarea
                name="estadoFav"
                value={this.state.estadoFav}
                onChange={ (e) => this.handleChange(e) }
              />
          </label>
          
          <div>
            <input 
              type="number"
              name="idade"
              onChange={ (e) => this.handleChange(e) }
              min="12"
              max="100"
              placeholder="idade"
            />
            <input type="checkbox" name="vai" onChange={ (e) => this.handleChange(e) }/>
          </div>

          <div>
            <select id="age" name="maior" defaultValue="" onChange={ (e) => this.handleChange(e) }>
              <option value="" disabled="true">select</option>
              <option value="adult">+18</option>
              <option value="child">-18</option>
            </select>
          </div>

        </form>
      </div>
    )
  }
}
