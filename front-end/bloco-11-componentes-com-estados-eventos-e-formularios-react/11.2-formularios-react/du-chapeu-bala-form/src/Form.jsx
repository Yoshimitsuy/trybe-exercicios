import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFav: '',
    }
  }

  handleChange(e) {
    this.setState({
      estadoFav: e.target.value,
    })
    console.log('log no event', e.target.value);
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
            <input type="number" name="idade" />
            <input type="checkbox" name="vai" />
          </div>

          <div>
            <select id="age" name="age" defaultValue="">
              <option value="">select</option>
              <option value="adult">+18</option>
              <option value="child">-18</option>
            </select>
          </div>

        </form>
      </div>
    )
  }
}
