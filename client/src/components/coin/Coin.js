import React from 'react';
import './Coin.css';

export const Coin = ({ denom }) => {
  const denominations = {
    1: 'penny',
    5: 'nickel',
    10: 'dime',
    25: 'quarter',
    50: 'half_dollar',
    100: 'silver_dollar',
  };

  // Returns the key from the object based on the value supplied.  In this case, it is used to get the amount of cents for each denomination.
  const getKeyFromVal = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };
  console.log(denom);
  return (
    <div className="container">
      <div className={`coin ${denom}`}>
        {getKeyFromVal(denominations, denom)}¢
      </div>
      {denom.charAt(0).toUpperCase() + denom.slice(1)}
    </div>
  );
};

export default Coin;
