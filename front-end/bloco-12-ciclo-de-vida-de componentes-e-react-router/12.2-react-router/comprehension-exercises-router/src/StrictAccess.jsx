import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    
    const { username, password } = this.props.user;

    if (!(username ==='rafael' && password ==='1234')) {
      alert("access denied");
      return <Redirect to="/" />
    }
    return <p> Welcome rafael </p>

  }
}

export default StrictAccess;
