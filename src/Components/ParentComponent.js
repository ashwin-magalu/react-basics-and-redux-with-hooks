import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  /*  greetParent() {
    alert(`Hello ${this.state.parentName}`); //when no parameter is passed in the child component
  } */

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
        {/* We are passing method to child */}
        {/* Here, we succesfully called a method in Parent Component by the button in the Child Component */}
      </div>
    );
  }
}

export default ParentComponent;
