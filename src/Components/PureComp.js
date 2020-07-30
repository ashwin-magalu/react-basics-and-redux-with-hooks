/* rpce + tab to create a pure component class  */
import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("***Pure Component***");

    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
//This does not re-render with Parent component, as it checks prev and current props and state and as there is no changes, it won't re-render
