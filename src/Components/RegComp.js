import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("***Regular Component***");

    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;
//This re-renders with Parent component, as it does not check prev and current props and state
