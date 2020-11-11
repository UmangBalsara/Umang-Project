import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

class Loading extends Component {
  render() {
    return (
      <div className="loading-style">
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }
}

export default Loading;
