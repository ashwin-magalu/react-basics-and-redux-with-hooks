import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

/* class ParentComp extends PureComponent { 
  //For PureComponent */

class ParentComp extends Component {
  // For Memo
  //There will be re-render after 2 seconds if we extend Component and if we extend PureComponent, then there will be no re-render, as there is no change in prevProps and prevState with currentProps and currentState
  constructor(props) {
    super(props);

    this.state = {
      name: "Ashwin",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ashwin",
      });
    }, 2000);
  }

  render() {
    console.log("***Parent Component***");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/*  <RegComp name={this.state.name} />
    <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
