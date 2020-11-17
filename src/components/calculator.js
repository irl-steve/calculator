import React from 'react';
import NumberPad from './numberPad.js';
import Display from './display.js';
import BackButton from './backButton.js';
import ClearButton from './clearButton.js';
import FunctionButtonSet from './functionButtons.js';
import left from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';
import right from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';

const Calculator = () => (
  <div className="calculator">
  <h1>My Calculator</h1>
    <Display/>
    <div className="keyPad">
      <div className="left">
        <ClearButton/>
        <BackButton/>
        <NumberPad />
      </div>
      <div className="right">
        <FunctionButtonSet/>
      </div>
    </div>
  </div>
);

export default Calculator;
