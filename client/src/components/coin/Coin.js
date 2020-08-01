import React from 'react';
import './Coin.css';

export const Coin = ({ denom }) => {
  const denominations = {
    1: 'penny',
    5: 'nickel',
    10: 'dime',
    25: 'quarter',
    50: 'half-dollar',
    100: 'silver-dollar',
  };
  console.log(denominations[denom]);
  return <div className={`coin ${denominations[denom]}`}>{denom}¢</div>;
};

export default Coin;
