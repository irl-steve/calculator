import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import functionButton from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="functionButton" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
