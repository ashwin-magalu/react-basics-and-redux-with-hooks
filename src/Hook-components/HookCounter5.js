import React, { useState, useEffect } from "react";

function HookCounter5() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(""); //for conditionally run effects

  useEffect(() => {
    console.log(`useEffect - Updating document title`); //for conditionally run effects
    document.title = `You Clicked ${count} times`;
  }, [count]); //for conditionally run effects, add array as a 2nd parameter in useEffect and mention which it should consider.
  // The function we passed as an argument will be executed every time a component renders. This is why we use useEffect
  // If useState was not used we should have wrote Life cycle methods, which is complex
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* for conditionally run effects */}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounter5;
