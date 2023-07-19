import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="spinner">
      <PacmanLoader color="#000000" />
    </div>
  );
};

export default Spinner;