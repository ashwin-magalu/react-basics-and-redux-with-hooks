import React, { useState, useEffect, useRef } from "react";

function RefTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    // const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      //clearInterval(interval);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer -{timer}
      {/* <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button> */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
  //The button with onClick clearInterval won't work as it only works for useEffect and not in event handler,
  //this is where useRef comes into picture.
  //useRef can be used to create generic container, which can hold a mutable value similar to  instance property on a class component
  //This generic container won't cause re-renders when the data changes, at the same time it remembers the data it stores even after other state variables cause re-render of this component
}

export default RefTimer;
