import React from 'react';

function Button({category='primary', text='click me', onClick}) {
  return (
    <button onClick={onClick} className={`btn btn--${category}`}>{text}</button>
  );
}

export default Button;