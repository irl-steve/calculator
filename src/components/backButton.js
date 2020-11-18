import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import topButtons from 'https://github.com/irl-steve/calculator/blob/master/src/index.css';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" className="topButtons" onClick={() => handleBackButton()}>
      Back
    </button>
  );
};

export default BackButton;
