import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(<React.StrictMode>
    <App/>
  </React.StrictMode>,
  
  document.getElementById('root')
  );
}

setInterval(tick, 1000);