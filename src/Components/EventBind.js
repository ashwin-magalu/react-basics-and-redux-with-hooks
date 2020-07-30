import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    //rconst+tab
    super(props);

    this.state = {
      message: "Hello",
    };

    //this.clickHandler = this.clickHandler.bind(this);
    //3rd method, here we bind this keyword in the constructor. This is better compared to other's as binding happens only once here unlike in render method
  }

  //commented out while using 4th method
  /*  clickHandler() {
    this.setState({
      message: "GoodBye!",
    });
    console.log(this); //undefined--> this keyword is undefined here
  } */

  clickHandler = () => {
    //using arrow function as a class property, 4th method
    this.setState({
      message: "Good-Bye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 1st method to give value for this is binding it in binder method(onClick event handler) */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* 2nd method using arrow function in render method, here () is needed as event handler is being called and it returns the value */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* 3rd method / approach, binding in constructor */}
        <button onClick={this.clickHandler}>Click</button>
        {/* 4th method, using Arrow function as a class property, comment out clickHandler method when using this, even this can be used instead of 3rd approach*/}
      </div>
    );
  }
}

export default EventBind;
