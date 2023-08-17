import React, { Component } from "react";

class User extends Component {
  // using a unmounting life cycle method
  componentWillUnmount() {
    console.warn("componentWillUnmount");
  }
  render() {
    return (
      <>
        <h1 className="text-3xl font-bold underline text-red-300">
          Hello world!
        </h1>
      </>
    );
  }
}

export default User;
