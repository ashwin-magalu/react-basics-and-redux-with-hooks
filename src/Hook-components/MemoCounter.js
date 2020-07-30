import React, { useState, useMemo } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    //useMemo is similar to useCallback, but the difference is:
    //useMemo invokes only the dependencies function & catches the result
    //When we want to catch a function use useCallback and when we want to catch the function's result use useMemo
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  // now only button 1 takes some time before working and button 2 works instantly

  return (
    <div>
      <button onClick={incrementOne}>Count One - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    </div>
  );
}

export default MemoCounter;
