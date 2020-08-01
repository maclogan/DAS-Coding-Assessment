import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const Form = ({ parentHandler }) => {
  const [value, setValue] = useState('');

  const defaultMaskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  };
  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <form
      className="currencyForm"
      onSubmit={(e) => {
        e.preventDefault();
        parentHandler(value);
      }}
    >
      <label className="currencyLabel">
        Amount:
        {/* <input
          type="text"
          value={value}
          onChange={(e) => setValue(currencyFormat(e.target.value))}
        /> */}
        <MaskedInput
          className="currencyInput"
          mask={currencyMask}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <input className="btn primary" type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
