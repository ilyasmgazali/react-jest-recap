import React from 'react';
import './button.css';

export default function Button( { label } ) {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button
        type="button"
        data-testid="button-toggle"
        className="button-style"
        onClick={() => !visible ? setVisible(true) : setVisible(false) }>
        {label}
      </button>

      {!visible ? <p data-testid='click-me'>Click me!</p> : <p data-testid='you-clicked-me'>You clicked me!</p>}
    </>
  );
}