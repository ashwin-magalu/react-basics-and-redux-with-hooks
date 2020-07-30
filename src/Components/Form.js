import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    //2nd step: Assign the component state to constructor
    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUserNameChange = (event) => {
    //Here event.target.value stores the value entered in input tag and then assign it to value
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username}, ${this.state.comments}, ${this.state.topic}`
    );
    event.preventDefault(); //This will keep the entered data as it is even after page is refreshed after submit button is clicked
    //If we don't have the form, then create this method and call it in onClick attribute in button itself
  };

  render() {
    const { username, comments, topic } = this.state;
    //Destructuring, because of this we write value as username and not as this.state.username
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
            /* 3rd Step: onChange */
          />
        </div>
        {/* 1st Step: Adding the HTML */}
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    ); //Without onChange method, the value entered by user in input tag won't be reflected
  }
}

export default Form;
