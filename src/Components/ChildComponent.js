/* rfce + tab to get named function */
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* Here, we succesfully called a method in Parent Component by the button in the Child Component */}
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
      {/* Passing parameters in Child Component to be used in the Parent Component using an Arrow Function */}
    </div>
  );
}
/* rfce + tab to get named function */

export default ChildComponent;
