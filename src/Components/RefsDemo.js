import React, { Component } from "react";

class RefsDemo extends Component {
  //1st step: create Ref
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null; //1st method,create callback ref and assign a value null
    this.setCbRef = (element) => {
      // 2nd method, assigning a DOM element to the callback ref
      this.cbRef = element;
    };
  }

  //Accessing ref as shown below 2 methods
  componentDidMount() {
    //3rd step: create focus inside the input tag
    /*  this.inputRef.current.focus();
    console.log(this.inputRef); */
    //4th method
    if (this.cbRef) {
      this.cbRef.focus(); // here, there is no need to use current as in earlier approach
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/*       2nd step: attach ref to input element        */}
        <input type="text" ref={this.setCbRef} />
        {/* 3rd method, attach this callback ref to input element */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
