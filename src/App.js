import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const names = ['Gianna', 'Corwin', 'Cassandra', 
'Emily', 'Jacques', 'Cari', 'Tyler', 'Mido', 'Todd', 'Eddie']

function App() {
  
const [myName, setMyName] = useState('Ainis')
const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty damn cool.
        </p>
      {names.map(name => (
        <button key={name} onClick={() => setMyName(name)}>{name}</button>
      ))}

        <button onClick={() => setMyName('Goose')}>Goose</button>
        <button onClick={() => setMyName('Jackie')}>Jackie</button>
        <button onClick={() => setMyName('Ainis')}>Ainis</button>
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
