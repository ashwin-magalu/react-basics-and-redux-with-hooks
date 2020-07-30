import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // to store list of posts
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    // axios is placed in componentDidMount()
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //then-catch methods to handle response and error
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>List of posts:</h2>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    ); // if url is wrong, it will show error message or else shows List of posts
  }
}

export default PostList;
