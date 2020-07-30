import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //returns null or HTML
    const { name, heroName } = this.props;
    //Destructuring
    // const { state1, state2 } = this.state;
    //To destructure States if needed
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
