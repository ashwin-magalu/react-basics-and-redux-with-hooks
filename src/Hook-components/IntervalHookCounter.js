import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1); //Method 2: using previous count
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  //  }, [count]); //Method 1: count is added as a dependency list here, as it changes at setInterval
  //Creating an empty array is to replicate componentDidMount().
  //But this array won't check for changes and renders only once
  // If you add dependency inside an array, array will check for changes and will re-render
  return <div>{count}</div>;
}
//If we have multiple codes that needs useEffect, then use useEffect that many times,
//instead of adding everything in a single useEffect and making it clumsy.

export default IntervalHookCounter;
