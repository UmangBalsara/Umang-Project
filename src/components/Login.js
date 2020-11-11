import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickHandler(e) {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("signup"));
    //console.log("Data is", data);
    if (
      this.state.email === data.email &&
      this.state.password === data.password
    ) {
      this.props.history.push("/header");
      //console.log("match sucessfully");
    } else {
      console.log("email or password is not match");
    }

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Form className="form-style">
        <h2 className="h2-style">Login</h2>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="label-style">Email address</Form.Label>
          <Form.Control
            className="input-modal-style"
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={this.state.email}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="label-style1">Password</Form.Label>
          <Form.Control
            className="input-modal-style"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            defaultValue={this.state.password}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="btn-style"
          onClick={(e) => {
            this.onClickHandler(e);
          }}
        >
          Login
        </Button>
        <br/>
        <a href="/signup" className="link-style">
          Create a account
        </a>
      </Form>
    );
  }
}

export default Login;
