import React, { useState } from 'react';
import Result from './components/result/Result';
import Form from './components/form/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [result, setResult] = useState({});

  const handleData = async (amount) => {
    // Basic formatting of data prior to sending a request (removes non-float values)
    if (amount.includes('$')) {
      amount = amount.replace('$', '');
    }
    if (amount.includes(',')) {
      amount = amount.replaceAll(',', '');
    }
    let converted = Number(amount);
    const req = { amount: converted };
    try {
      const res = await axios.post('http://localhost:8000', req);
      setResult(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="App">
      <Form parentHandler={handleData} />
      {result && <Result results={result} />}
    </div>
  );
}

export default App;
