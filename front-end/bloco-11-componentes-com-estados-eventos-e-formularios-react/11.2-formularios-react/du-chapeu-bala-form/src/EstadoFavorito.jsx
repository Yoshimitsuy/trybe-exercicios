import React, { Component } from 'react'

export default class EstadoFavorito extends Component {
 
  render() {
    const { propFormValue, formHandleChange } = this.props;

    let error = undefined
    if(propFormValue.length < 1) {
      error = 'não pode ficar sem texto';
    }
    if(propFormValue.length > 50) {
      error = 'texto muito grande';
    }

    // console.log(`comp filho ${propFormValue}`);
    return(
      <label>
        digite aqui uma porra
        <textarea
          maxLength="55"
          name="estadoFav"
          value={propFormValue}  
          onChange={formHandleChange}
        />
        <span>
          {error ? error : '' }
        </span>
      </label>
    )
  }
}

