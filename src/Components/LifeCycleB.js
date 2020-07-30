/* Child of 1st method: Mounting */
/* import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    //1st method
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //2nd method
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //4th method
    console.log("LifeCycleB componentDidMount");
  }

  render() {
    //3rd method
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
 */

//Child of second method Updation
import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    //1st method
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("LifeCycleB constructor");
  }

  componentDidMount() {
    //4th method
    console.log("LifeCycleB componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    //1st method
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    //2nd method
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //4th method
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    //5th method
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    //3rd method
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
