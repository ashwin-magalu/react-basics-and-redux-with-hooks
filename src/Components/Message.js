import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      // state is a reserved keyword and when inside Class, we should use this keyword
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      // It accepts only the object
      message: "Thank you for Subscribing",
    });
  }

  render() {
    //returns null or HTML
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
