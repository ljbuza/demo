import React from 'react';

const Child = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
);
