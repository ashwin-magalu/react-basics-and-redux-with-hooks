import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    // Step 3: Consuming the Context value
    return (
      <UserConsumer>
        {(username) => {
          // username is a value passed in App.js file as a value in UserProvider
          return <div>Hello {username}.</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
