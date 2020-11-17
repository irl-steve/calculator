import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';

const Key = ({keyValue}) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(keyValue)}>
      {keyValue}
    </button>
  );
};

export default Key;
