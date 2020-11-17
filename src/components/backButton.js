import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';
import topButtons from 'C:/Users/Stephen/Documents/Side Projects/calculator/src/index.css';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" className="topButtons" onClick={() => handleBackButton()}>
      Back
    </button>
  );
};

export default BackButton;
