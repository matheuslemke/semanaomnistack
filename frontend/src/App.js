import React, { useState } from 'react';
import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    counter++;
  }

  function incrementState() {
    setCounter(++counter);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
      <button onClick={incrementState}>Incrementar com state</button>
    </div>
  );
}

export default App;
