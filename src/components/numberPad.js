import React from 'react';
import Key from './key.js';
import numberPad from 'https://github.com/irl-steve/calculator/blob/master/src/index.css';
import ToggleNegativeButton from './toggleNegative.js';

const NumberPad = () => (
    <div className = "numberPad">
      <Key keyValue = {7}/>
      <Key keyValue = {8}/>
      <Key keyValue = {9}/>
      <Key keyValue = {4}/>
      <Key keyValue = {5}/>
      <Key keyValue = {6}/>
      <Key keyValue = {1}/>
      <Key keyValue = {2}/>
      <Key keyValue = {3}/>
      <Key keyValue = {'.'}/>
      <Key keyValue = {0}/>
      <ToggleNegativeButton/>
    </div>
);

export default NumberPad;
