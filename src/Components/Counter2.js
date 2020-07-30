import React, { Component } from "react";

class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    {
      /* If we use render prop as an attribute in App.js */
    }
    {
      /*  <div>{this.props.render(this.state.count, this.incrementCount)}</div> */
    }
    {
      /** If we pass the function instead of render prop use the below code */
    }
    return (
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter2;
