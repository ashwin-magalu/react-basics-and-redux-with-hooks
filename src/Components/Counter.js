/* type rce and hit tab to get readymade class structure */
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    /* this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count); //We can place it here within setState() instead
      }
    ); */
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));

    console.log(this.state.count); //Do not place it here as it is Synchronous and is called before setState()
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
