import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import functionButton from 'https://github.com/irl-steve/calculator/blob/master/src/index.css';

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="functionButton" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
