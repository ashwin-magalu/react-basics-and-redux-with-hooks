import React from "react";

function MemoComp({ name }) {
  //name is destructured here.
  console.log("rendering memo component");
  return <div>{name}</div>;
}
/* export default MemoComp; */
//This will re-render along with the parent file
export default React.memo(MemoComp);
//React.memo avoids re-rendering of this file along with parent file
//React.memo recieves a component, adds some new things to that component and returns a whole new component
