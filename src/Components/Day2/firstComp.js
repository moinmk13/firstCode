import React, { Component } from "react";
import User from "./User";

class First extends Component {
  // define a constructor
  constructor() {
    super();
    this.state = {
      count: 0,
      deleteUser: true,
    };
    console.warn("constructor");
  }
  // using mounting lifecycle method
  componentDidMount() {
    console.warn("componentDidMount");
  }
  // using updating lifecycle method
  componentDidUpdate() {
    console.warn(`componentDidUpdate ${this.state.count}`);
  }

  render() {
    return (
      <>
        {/* using a telwind css */}
        <h1 className="px-4 py-2 text-3xl text-red-200">
          Hello class Component
        </h1>
        {/* display a state variable */}
        <h1>Count : {this.state.count}</h1>
        {/* using a button and add the event and state update */}
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Click
        </button>
        <br />
        <h1>
          {/* using a ternary operator and display a User component */}
          {this.state.deleteUser ? <User /> : null}
        </h1>
        {/* using a button and add the event and state update and use telwind css */}
        <button
          onClick={() => this.setState({ deleteUser: false })}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Delete User
        </button>
      </>
    );
  }
}

export default First;
