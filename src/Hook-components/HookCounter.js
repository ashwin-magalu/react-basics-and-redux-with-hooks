import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0); //Array Destructuring
  // 0 is a initial value of state variable, count is a current value and setCount is a method, they can be anything

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
