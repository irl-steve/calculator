import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import display from 'https://github.com/irl-steve/calculator/blob/master/src/index.css';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div className = "display">
      <p className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </p>
      <h3 className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
        {!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}
      </h3>
    </div>
  );
};

export default Display;
