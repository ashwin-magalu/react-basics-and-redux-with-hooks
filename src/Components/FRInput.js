import React from "react";

/* function FRInput() {
  return (
    <div>
      <input type="text" />
    </div>
  );
} */
//3rd step: Forwarding ref to child from parent
//Arrow function is passed as a parameter to the forwardRef()
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      {/* This ref will point to ref attribute in Parent element */}
    </div>
  );
});

export default FRInput;
