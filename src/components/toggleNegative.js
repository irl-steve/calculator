import React, { useContext } from 'react';
import { NumberContext } from './numberProvider.js';

const ToggleNegativeButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
};

export default ToggleNegativeButton;
