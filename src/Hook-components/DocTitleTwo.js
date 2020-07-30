/* import React, { useState, useEffect } from "react";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleTwo; */
// Here, we are repeating the same code, so here we can use the Custom Hook
import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleTwo;
