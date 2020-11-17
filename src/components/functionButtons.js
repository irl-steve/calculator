import React from 'react';
import FunctionButton from './functionButton.js';
import EqualButton from './equalButton.js';
import functionButtonSet from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';

const FunctionButtonSet = () => (
  <div className = "functionButtonSet">
    <FunctionButton buttonValue = '+'/>
    <FunctionButton buttonValue = '-'/>
    <FunctionButton buttonValue = 'X'/>
    <FunctionButton buttonValue = '÷'/>
    <EqualButton/>
  </div>
);

export default FunctionButtonSet;
