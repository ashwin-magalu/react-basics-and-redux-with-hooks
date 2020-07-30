import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
  /* Warning: Can't perform a React state update on an unmounted component. 
    This is a no-op, but it indicates a memory leak in your application. 
    To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in HookMouse (at MouseContainer.js:9) 
    This warning comes because, we are unmounting HookMouse when the display is false.
    But still state log will be updated, this is a memory leak issue. So we should Clean Up*/
}

export default MouseContainer;
