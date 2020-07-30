import React, { useEffect, useRef } from "react";

function RefFocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //Focus the I/P element
    inputRef.current.focus();
  }, []); //If the array is empty, then this function will work only once
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default RefFocusInput;
