import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: "true",
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

function DataFetchin2() {
  const [state, dispath] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispath({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispath({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchin2;
