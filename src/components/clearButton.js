import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import topButtons from 'https://github.com/irl-steve/calculator/blob/master/src/index.css';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="topButtons" onClick={() => handleClearValue()}>
      Clear
    </button>
  );
};

export default ClearButton;
