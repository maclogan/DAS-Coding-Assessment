import React from 'react';
import Coin from '../coin/Coin';
import './Result.css';

export const Result = ({ results }) => {
  // Filter all zero values out of the results, then render a COIN component for the remaining values
  let coinArray = Object.keys(results)
    .filter((key) => {
      return results[key] !== 0;
    })
    .map((key) => (
      <li key={key}>
        {results[key]} X
        <Coin denom={key} />
      </li>
    ));

  return (
    <div>
      <ul id="coin-list">{coinArray}</ul>
    </div>
  );
};

export default Result;
