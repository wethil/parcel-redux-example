import React from 'react';
import './PokeBall.scss';

function PokeBall({ message }) {
  return (
    <div className='holyContainer'>
      <div className='pokemon'><i></i></div>
      { message || <div> {} Loading...</div> }
    </div>
  );
}

export default PokeBall;

