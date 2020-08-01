import React, { useState } from 'react';
import Coin from './components/coin/Coin';
import Form from './components/form/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [result, setResult] = useState({});

  const handleData = async (amount) => {
    if (amount.includes('$')) {
      amount = amount.replace('$', '');
    }
    let converted = Number(amount);
    const req = { amount: converted };

    try {
      const res = await axios.post('http://localhost:8000', req);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  //   const submitReq = (amount) => {

  //   };

  return (
    <div className="App">
      <Form parentHandler={handleData} />
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
