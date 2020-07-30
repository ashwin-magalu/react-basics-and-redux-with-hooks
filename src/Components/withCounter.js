//File name starts with small letter, it is a HOC convention
import React from "react";

const withCounter = (WrappedComponent,incrementNumber) => {
  // const UpdatedComponent = (OriginalComponent)=>{}
  class WithCounter extends React.Component {
    //class NewComponent extends React.Component{}
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber};
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
