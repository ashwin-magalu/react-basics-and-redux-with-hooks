import React from "react";

const Hello = () => {
  /*  return (
    <div className = "dummyClass">
      <h1>Hello Gowdre</h1>
    </div>
  ); */
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Ashwin")
  );
  //contains a string, property and children of that 1st string, there can be n number of childrens
};

export default Hello;
