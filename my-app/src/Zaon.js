import React, { useState } from 'react';

import './App.css';

const Zaon = () => {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };
  const MinusNumber = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="display_item">
      <div className="my-text">
        <h3>Use of Step Counter In Exercise</h3>
        <p>
          A step counter, also known as a pedometer, is a device that tracks and
          counts the number of steps you take. Here are some of the benefits of
          using a step counter
        </p>
        <p>
          A step counter can help increase your physical activity levels by
          providing a tangible goal for how many steps you should aim to take
          each day. This can motivate you to be more active and take more steps,
          leading to improved health
        </p>
        <p>
          Taking more steps can lead to improved cardiovascular health, stronger
          bones and muscles, and a healthier weight. It can also reduce the risk
          of developing chronic diseases such as heart disease, type 2 diabetes,
          and some forms of cancer.
        </p>
      </div>
      <div className="Zaon">
        <div className="box">
          <h1 className="heading">Steps Counter</h1>
          <div className="display">{count}</div>
          <div className="buttons">
            <button className="add" onClick={addNumber}>
              +
            </button>
            <button className="Minus" onClick={MinusNumber}>
              -
            </button>
            <button className="reset" onClick={reset}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zaon;
