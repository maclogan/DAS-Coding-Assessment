import React from 'react';
import Coin from './components/coin/Coin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Coin denom={1} />
      <Coin denom={5} />
      <Coin denom={10} />
      <Coin denom={25} />
      <Coin denom={50} />
      <Coin denom={100} />
    </div>
  );
}

export default App;
