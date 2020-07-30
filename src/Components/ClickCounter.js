import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name} Clicked {count} times
        {/* This won't display name in Webpage as it is passed to HOC and not to ClickCounter, this works when  {...this.props} is passed in HOC */}
        {/* Clicked {count} times */}
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
