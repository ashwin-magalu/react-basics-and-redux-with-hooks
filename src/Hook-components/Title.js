import React from "react";

function Title() {
  console.log("Rendering Title");
  return <h2>useCallback Hook</h2>;
}

export default React.memo(Title);
// We have wrapped the Title, so it re-renders only if there's a change in props or state
