import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { 
      greetingMessage = 'Hi, Jow',
      match: { params: { id } } } = this.props; // aqui poderia ser const { id } = this.props.match.params

    return (
      <main>
        <h2>Users</h2>
        <p> 
          { `${ greetingMessage } User ${ id }` }, 
          this My awesome Users component 
          </p>
      </main>
    );
  }
};

export default Users;

