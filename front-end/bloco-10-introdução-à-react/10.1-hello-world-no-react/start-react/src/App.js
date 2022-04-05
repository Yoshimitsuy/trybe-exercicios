import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = [ 'estudar', 'treinar', 'comer', 'estudar mais', 'aula', 'lolzinho' ]

function App() {
  return (
    <ul>{ compromissos.map(comp => Task(comp)) }</ul>
  );
}

export default App;
