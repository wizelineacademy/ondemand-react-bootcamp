import React from 'react';
import Button from "../Button/Button";
import "./counter.css";

function Counter({ handler, numItems }) {

  function handleIncrement() {
    handler(numItems + 1);
  }

  function handleDecrement() {
    handler(numItems <= 0 ? 0 : numItems - 1);
  }

  return (
    <div className="counter">
      <Button classname="counter-button" onclick={handleDecrement}>-</Button>
      <span className="counter-text">{numItems}</span>
      <Button classname="counter-button" onclick={handleIncrement}>+</Button>
      <br />
    </div>
  );
}

export default Counter;
