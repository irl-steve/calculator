import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import topButtons from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="topButtons" onClick={() => handleClearValue()}>
      Clear
    </button>
  );
};

export default ClearButton;
