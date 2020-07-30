import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext; //Only used while using Context type method, Use this or ComponentE.contextType

  render() {
    return (
      <div>
        Component E Context: {this.context}
        {/* Context type method execution */}
        <ComponentF />
      </div>
    );
  }
}

//ComponentE.contextType = UserContext; //Only used while using Context type method, use this or static one

export default ComponentE;
