import React from "react";
import './App.css';

class HelloWorld extends React.Component {
  // agora o render
  render () {
    return ( 
      <section className="hello">
      <h1>Hello world</h1>
      <h2>React</h2>
    </section>
    )
  }
}

export default HelloWorld;
