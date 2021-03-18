import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    console.log();
    // onSetDiff(parseInt(e.target.value, 10));
    // setState(parseInt(e.target.value));
    onSetDiff(parseInt(e.target.value, 10) || 0);
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="1" value={diff} min="1" onChange={onChange}></input>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
