import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import './Form.css';

export const Form = ({ parentHandler }) => {
  const [value, setValue] = useState('');

  // Setting mask options for the currency input (utilizing an npm package called react-text-mask and text-mask-addons)
  const defaultMaskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
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
        Enter an amount:
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
