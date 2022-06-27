import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";
import "./counter.css";


function Counter({ handler }) {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(prevCounter => (prevCounter + 1));
  }

  function handleDecrement() {
    setCounter(prevCounter => (prevCounter <= 0 ? 0 : prevCounter - 1));
  }

  useEffect(() => {
    handler(counter);
  }, [counter]);

  return (
    <div className="counter">
      <Button classname="counter-button" onclick={handleIncrement}>+</Button>
      <span className="counter-text">{counter}</span>
      <Button classname="counter-button" onclick={handleDecrement}>-</Button>
      <br />
    </div>
  );
}

export default Counter;
