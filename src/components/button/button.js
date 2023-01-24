import React from 'react';
import './button.css';

export default function Button({ label }) {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="button-style"
        onClick={() => setVisible(true)}>
        {label}
      </button>
      {!visible ? <p>Click me!</p> : <p>You clicked me!</p>}
    </>
  );
}
