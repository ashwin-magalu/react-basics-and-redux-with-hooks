//rfce+tab creates the readymade function structure
import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  ); // here we are passing a function for onClick, event handler is a function and not a function call, so we are not writing () here
}

export default FunctionClick;
