import React, { useContext } from 'react';
import { NumberContext } from './numberProvider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" className="equalButton" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;
