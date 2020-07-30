import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //1st method: if / else, if / else do not work inside JSX, So this is not a better approach
    /* if (this.state.isLoggedIn) {
      return <div>Welcome Ashwin</div>;
    } else {
      return <div>Welcome Guest</div>;
    } */
    //
    //2nd method: Element variables: Using JS variables
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Ashwin</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; */
    //
    //3rd method: Ternary conditional operator, this is a better approach
    /* return this.state.isLoggedIn ? (
      <div>Welcome Ashwin</div>
    ) : (
      <div>Welcome Guest</div>
    ); */
    //
    //4th method: Short circuit operator: Used when we want to render something or nothing
    return this.state.isLoggedIn && <div>Welcome Ashwin</div>;
    //
    /* return (
      <div>
        <div>Welcome Ashwin</div>
        <div>Welcome Guest</div>
      </div>
    ); */
  }
}

export default UserGreeting;
