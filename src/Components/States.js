import React from 'react';
import './Home.css';

const States = ({ states }) => {
  return (
    <div>
      {states.map((state) => (
        <div className='states' >
          <h1>{state.name}</h1>
          <h2>{state.language}</h2>
          <h3>{state.population}</h3>
        </div>
      ))}
    </div>
  );
};

export default States;
