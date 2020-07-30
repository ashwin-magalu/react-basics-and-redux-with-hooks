/* 1st method: Mounting */
/* import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    //1st method
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //2nd method
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //4th method
    console.log("LifeCycleA componentDidMount");
  }

  render() {
    //3rd method
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA; 
*/
/* 2nd method: updation */
import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    //1st method
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("LifeCycleA constructor");
  }

  componentDidMount() {
    //4th method
    console.log("LifeCycleA componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    //1st method
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    //2nd method
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //4th method
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    //5th method
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Akshay",
    });
  };

  render() {
    //3rd method
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
